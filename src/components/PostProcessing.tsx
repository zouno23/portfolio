import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, RenderPass, EffectPass } from "postprocessing";
import { BloomEffect, NoiseEffect, BlendFunction } from "postprocessing";
import SimplexNoise from 'simplex-noise';

const PostProcessing = () => {
  const { gl, scene, camera } = useThree();
  const composer = useRef<EffectComposer>(null!);
  const starComposer = useRef<EffectComposer>(null!);

  // Create star field with colors and positions
  const createStarField = () => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const colorOptions = [
      0xffffff, // White
      0x1e90ff, // Dodger Blue
      0x4682b4, // Steel Blue
      0x00bfff, // Deep Sky Blue
      0xadd8e6, // Light Blue
      0x87ceeb, // Sky Blue
    ];

    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      vertices.push(x, y, z);

      const color = new THREE.Color(
        colorOptions[Math.floor(Math.random() * colorOptions.length)],
      );
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3),
    );

    const material = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
    });

    return new THREE.Points(geometry, material);
  };

  useEffect(() => {
    // Create render targets
    const renderTargetStars = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
    const renderTargetMain = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

    // Create composers
    composer.current = new EffectComposer(gl, renderTargetMain);
    starComposer.current = new EffectComposer(gl, renderTargetStars);

    // Set up star effects
    const renderPassStars = new RenderPass(scene, camera);
    const bloomEffectStars = new BloomEffect({
      luminanceThreshold: 0.85,
      luminanceSmoothing: 0.025,
      intensity: 2.5,
    });
    const noiseEffectStars = new NoiseEffect({
      blendFunction: BlendFunction.ADD,
      premultiply: true,
    });

    // Set up main effects
    const renderPassMain = new RenderPass(scene, camera);
    const bloomEffectMain = new BloomEffect({
      luminanceThreshold: 1.85,
      luminanceSmoothing: 0.25,
      intensity: 1.5, // Adjust as needed
    });
 

    // Create and add star field to the scene
    const starField = createStarField();
    scene.add(starField);

    // Add passes to composers
    starComposer.current.addPass(renderPassStars);
    starComposer.current.addPass(new EffectPass(camera, bloomEffectStars, noiseEffectStars));

    composer.current.addPass(renderPassMain);
    composer.current.addPass(new EffectPass(camera, bloomEffectMain));

    return () => {
      composer.current?.dispose();
      starComposer.current?.dispose();
    };
  }, [gl, scene, camera]);

  useFrame((state, delta) => {
    // Render the stars with their effects
    starComposer.current?.render(delta);
    // Render the main scene with its effects
    composer.current?.render(delta);
  }, 1);

  return null;
};

export default PostProcessing;
