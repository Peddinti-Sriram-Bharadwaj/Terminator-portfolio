// src/components/TechStack.js
"use client";

import {
  SiPython, SiC, SiCplusplus, SiPytorch, SiTensorflow, SiKubernetes,
  SiDocker, SiJenkins, SiFastapi, SiRedis, SiPostgresql, SiElasticstack,
  SiAnsible, SiGit
} from 'react-icons/si';

// Map skill names to their corresponding icons
const iconMap = {
  Python: <SiPython />,
  C: <SiC />,
  'C++': <SiCplusplus />,
  PyTorch: <SiPytorch />,
  TensorFlow: <SiTensorflow />,
  Kubernetes: <SiKubernetes />,
  Docker: <SiDocker />,
  Jenkins: <SiJenkins />,
  FastAPI: <SiFastapi />,
  Redis: <SiRedis />,
  PostgreSQL: <SiPostgresql />,
  'ELK Stack': <SiElasticstack />,
  Ansible: <SiAnsible />,
  Git: <SiGit />,
};

export default function TechStack({ skills }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
      {skills.map((skill) => {
        const icon = iconMap[skill];
        // Only render the skill if its icon exists in our map
        if (!icon) {
          return null;
        }
        return (
          <div key={skill} className="flex flex-col items-center gap-2">
            <div className="text-4xl text-slate-700 dark:text-gray-300 transition-transform duration-300 hover:scale-110">
              {icon}
            </div>
            <span className="text-sm text-slate-600 dark:text-gray-4000">{skill}</span>
          </div>
        );
      })}
    </div>
  );
}