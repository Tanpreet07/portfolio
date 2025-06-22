"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SkillsSection() {
  const containerRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(cursorY, { damping: 20, stiffness: 300 });

  // Physics constants
  const CURSOR_RADIUS = 30;
  const SKILL_RADIUS = 25;
  const ATTRACTION_RADIUS = 150;
  const MAX_ATTRACTION_FORCE = 0.5;
  const REPULSION_FORCE = 0.8;
  const FRICTION = 0.92;
  const BOUNCINESS = 0.7;

  const [skills, setSkills] = useState([
    { id: 1, name: 'Next.js', x: 100, y: 100, vx: 0, vy: 0, logo: '/next.png' },
    { id: 2, name: 'React', x: 300, y: 150, vx: 0, vy: 0, logo: '/react.png' },
    { id: 3, name: 'Node.js', x: 200, y: 300, vx: 0, vy: 0, logo: '/node.png' },
    { id: 4, name: 'Express', x: 800, y: 200, vx: 0, vy: 0, logo: '/express.png' },
    { id: 5, name: 'MongoDB', x: 700, y: 400, vx: 0, vy: 0, logo: '/mongodb.png' },
    { id: 6, name: 'Tailwind', x: 1200, y: 350, vx: 0, vy: 0, logo: '/tailwind.png' },
    { id: 7, name: 'Github', x: 600, y: 360, vx: 0, vy: 0, logo: '/github.png' },
    { id: 8, name: 'Git', x: 950, y: 140, vx: 0, vy: 0, logo: '/git.png' },
    { id: 9, name: 'HTML', x: 1000, y: 270, vx: 0, vy: 0, logo: '/html.png' },
    { id: 10, name: 'CSS', x: 950, y: 370, vx: 0, vy: 0, logo: '/css.png' },
    { id: 11, name: 'JavaScript', x: 1150, y: 250, vx: 0, vy: 0, logo: '/javascript.png' },
    { id: 12, name: 'C++', x: 400, y: 300, vx: 0, vy: 0, logo: '/c++.png' },
    { id: 13, name: 'MYSQL', x: 150, y: 350, vx: 0, vy: 0, logo: '/mysql.png' },
  ]);

  // Handle mouse movement with collision avoidance
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;

    // Check collisions with skills before updating position
    let canMove = true;
    skills.forEach(skill => {
      const dx = newX - skill.x;
      const dy = newY - skill.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < CURSOR_RADIUS + SKILL_RADIUS) {
        canMove = false;
      }
    });

    if (canMove) {
      cursorX.set(newX);
      cursorY.set(newY);
    }
  };

  // Main physics loop with full collision detection
  useEffect(() => {
    if (!containerRef.current) return;

    let animationFrame;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const physicsLoop = () => {
      setSkills(prevSkills => {
        const cursorPos = { x: smoothX.get(), y: smoothY.get() };
        
        return prevSkills.map((skill, index) => {
          // Initialize forces
          let fx = 0;
          let fy = 0;

          // 1. Attraction to cursor
          const cursorDx = cursorPos.x - skill.x;
          const cursorDy = cursorPos.y - skill.y;
          const cursorDistance = Math.sqrt(cursorDx * cursorDx + cursorDy * cursorDy);
          
          if (cursorDistance < ATTRACTION_RADIUS && cursorDistance > 0) {
            const attractionForce = MAX_ATTRACTION_FORCE * 
                                 (1 - cursorDistance / ATTRACTION_RADIUS);
            fx += (cursorDx / cursorDistance) * attractionForce;
            fy += (cursorDy / cursorDistance) * attractionForce;
          }

          // 2. Repulsion from cursor if too close
          const minCursorDistance = CURSOR_RADIUS + SKILL_RADIUS;
          if (cursorDistance < minCursorDistance) {
            const repulsionForce = REPULSION_FORCE * 
                                 (minCursorDistance - cursorDistance) / minCursorDistance;
            fx -= (cursorDx / cursorDistance) * repulsionForce;
            fy -= (cursorDy / cursorDistance) * repulsionForce;
          }

          // 3. Repulsion from other skills
          prevSkills.forEach((otherSkill, otherIndex) => {
            if (index === otherIndex) return;
            
            const dx = skill.x - otherSkill.x;
            const dy = skill.y - otherSkill.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = SKILL_RADIUS * 2;
            
            if (distance < minDistance) {
              const repulsionForce = REPULSION_FORCE * 
                                   (minDistance - distance) / minDistance;
              fx += (dx / distance) * repulsionForce;
              fy += (dy / distance) * repulsionForce;
            }
          });

          // Apply forces to velocity
          let vx = (skill.vx + fx) * FRICTION;
          let vy = (skill.vy + fy) * FRICTION;

          // Boundary collisions
          if (skill.x < SKILL_RADIUS || skill.x > containerWidth - SKILL_RADIUS) {
            vx *= -BOUNCINESS;
          }
          if (skill.y < SKILL_RADIUS || skill.y > containerHeight - SKILL_RADIUS) {
            vy *= -BOUNCINESS;
          }

          // Calculate new position
          let newX = skill.x + vx;
          let newY = skill.y + vy;

          // Ensure stays within bounds
          newX = Math.max(SKILL_RADIUS, Math.min(containerWidth - SKILL_RADIUS, newX));
          newY = Math.max(SKILL_RADIUS, Math.min(containerHeight - SKILL_RADIUS, newY));

          return {
            ...skill,
            x: newX,
            y: newY,
            vx,
            vy
          };
        });
      });

      animationFrame = requestAnimationFrame(physicsLoop);
    };

    physicsLoop();
    return () => cancelAnimationFrame(animationFrame);
  }, [smoothX, smoothY]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[500px] w-full rounded-xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor circle */}
      <motion.div
        className="absolute w-[100px] h-[100px] bg-black border rounded-full shadow-lg z-10"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Skill elements */}
      {skills.map(skill => (
        <motion.div
          key={skill.id}
          className="absolute flex flex-col items-center justify-center z-0"
          style={{
            x: skill.x,
            y: skill.y,
            translateX: '-50%',
            translateY: '-50%',
            width: `${SKILL_RADIUS * 2}px`,
            height: `${SKILL_RADIUS * 2}px`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-20 h-20 rounded-full object-contain"
            />
          </div>
          <span className="text-white text-xs font-medium bg-black bg-opacity-50 px-2 py-1 rounded-full mt-1">
            {skill.name}
          </span>
        </motion.div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-sm text-white opacity-80 inline-block bg-black bg-opacity-50 px-4 py-2 rounded-full">
          Move your cursor to attract the skills
        </p>
      </div>
    </div>
  );
}