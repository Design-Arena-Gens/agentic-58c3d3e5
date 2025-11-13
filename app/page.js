'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function FarewellScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let time = 0;

    const draw = () => {
      time += 0.02;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pastel sky gradient background
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGradient.addColorStop(0, '#FFE5E5');
      skyGradient.addColorStop(0.4, '#FFF0E5');
      skyGradient.addColorStop(1, '#E5F0FF');
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Window frame
      const windowWidth = canvas.width * 0.7;
      const windowHeight = canvas.height * 0.6;
      const windowX = (canvas.width - windowWidth) / 2;
      const windowY = canvas.height * 0.25;

      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 20;
      ctx.strokeRect(windowX, windowY, windowWidth, windowHeight);

      // Window cross bars
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, windowY);
      ctx.lineTo(canvas.width / 2, windowY + windowHeight);
      ctx.moveTo(windowX, windowY + windowHeight / 2);
      ctx.lineTo(windowX + windowWidth, windowY + windowHeight / 2);
      ctx.stroke();

      // Draw child (bacha)
      const childX = canvas.width * 0.35;
      const childY = canvas.height * 0.5;

      // Head with wheatish skin tone
      ctx.fillStyle = '#D4A574';
      ctx.beginPath();
      ctx.arc(childX, childY, 60, 0, Math.PI * 2);
      ctx.fill();

      // Messy hair
      ctx.fillStyle = '#3E2723';
      ctx.beginPath();
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const hairX = childX + Math.cos(angle) * 65;
        const hairY = childY + Math.sin(angle) * 65 - 10;
        ctx.moveTo(hairX, hairY);
        ctx.arc(hairX, hairY, 15 + Math.random() * 5, 0, Math.PI * 2);
      }
      ctx.fill();

      // Eyes (slightly watery with shine)
      ctx.fillStyle = '#2C2416';
      ctx.beginPath();
      ctx.arc(childX - 20, childY - 10, 8, 0, Math.PI * 2);
      ctx.arc(childX + 20, childY - 10, 8, 0, Math.PI * 2);
      ctx.fill();

      // Eye shine (watery effect)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(childX - 17, childY - 13, 3, 0, Math.PI * 2);
      ctx.arc(childX + 23, childY - 13, 3, 0, Math.PI * 2);
      ctx.fill();

      // Tears forming
      ctx.fillStyle = 'rgba(150, 200, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(childX - 20, childY + 2, 4, 0, Math.PI * 2);
      ctx.arc(childX + 20, childY + 2, 4, 0, Math.PI * 2);
      ctx.fill();

      // Smile
      ctx.strokeStyle = '#2C2416';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(childX, childY + 10, 20, 0.2, Math.PI - 0.2);
      ctx.stroke();

      // Body
      ctx.fillStyle = '#FFB74D';
      ctx.fillRect(childX - 40, childY + 60, 80, 100);

      // Raised hand (waving)
      const handWave = Math.sin(time * 3) * 15;
      ctx.save();
      ctx.translate(childX + 70, childY + 80);
      ctx.rotate(-0.5 + handWave * 0.03);
      ctx.fillStyle = '#D4A574';
      ctx.fillRect(-15, 0, 30, 80);
      ctx.beginPath();
      ctx.arc(0, 80, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Parrot in flight
      const parrotX = canvas.width * 0.65 + Math.sin(time) * 30;
      const parrotY = canvas.height * 0.35 + Math.cos(time * 2) * 20;
      const wingFlap = Math.sin(time * 8) * 0.3;

      // Parrot body
      ctx.fillStyle = '#4CAF50';
      ctx.beginPath();
      ctx.ellipse(parrotX, parrotY, 35, 45, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Parrot head
      ctx.fillStyle = '#66BB6A';
      ctx.beginPath();
      ctx.arc(parrotX + 10, parrotY - 30, 25, 0, Math.PI * 2);
      ctx.fill();

      // Red beak (shining)
      ctx.fillStyle = '#FF3D00';
      ctx.beginPath();
      ctx.moveTo(parrotX + 30, parrotY - 30);
      ctx.lineTo(parrotX + 50, parrotY - 25);
      ctx.lineTo(parrotX + 30, parrotY - 20);
      ctx.closePath();
      ctx.fill();

      // Beak shine
      ctx.fillStyle = '#FF6E40';
      ctx.beginPath();
      ctx.arc(parrotX + 35, parrotY - 28, 4, 0, Math.PI * 2);
      ctx.fill();

      // Wings with motion blur
      ctx.save();
      ctx.globalAlpha = 0.7;

      // Left wing
      ctx.fillStyle = '#388E3C';
      ctx.save();
      ctx.translate(parrotX - 15, parrotY);
      ctx.rotate(-0.5 + wingFlap);
      ctx.fillRect(-40, -15, 50, 30);
      ctx.restore();

      // Motion blur effect
      for (let i = 1; i <= 3; i++) {
        ctx.globalAlpha = 0.2 / i;
        ctx.save();
        ctx.translate(parrotX - 15, parrotY);
        ctx.rotate(-0.5 + wingFlap - i * 0.1);
        ctx.fillRect(-40, -15, 50, 30);
        ctx.restore();
      }

      ctx.globalAlpha = 0.7;

      // Right wing
      ctx.fillStyle = '#388E3C';
      ctx.save();
      ctx.translate(parrotX - 15, parrotY);
      ctx.rotate(0.5 - wingFlap);
      ctx.fillRect(-40, -15, 50, 30);
      ctx.restore();

      // Motion blur effect
      for (let i = 1; i <= 3; i++) {
        ctx.globalAlpha = 0.2 / i;
        ctx.save();
        ctx.translate(parrotX - 15, parrotY);
        ctx.rotate(0.5 - wingFlap + i * 0.1);
        ctx.fillRect(-40, -15, 50, 30);
        ctx.restore();
      }

      ctx.restore();

      // Parrot eye
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(parrotX + 15, parrotY - 33, 4, 0, Math.PI * 2);
      ctx.fill();

      // Emotional glow overlay (Pixar-style)
      const glowGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.6
      );
      glowGradient.addColorStop(0, 'rgba(255, 240, 200, 0.3)');
      glowGradient.addColorStop(1, 'rgba(255, 200, 150, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        width={1080}
        height={1920}
        className={styles.canvas}
      />
    </div>
  );
}
