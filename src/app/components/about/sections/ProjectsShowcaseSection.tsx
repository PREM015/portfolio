'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack online store with payment integration and admin dashboard',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    image: '🛒',
    stats: { users: '1k+', sales: '$50k+', rating: '4.8/5' },
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '✅',
    stats: { teams: '50+', tasks: '10k+', uptime: '99.9%' },
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot with natural language processing',
    tech: ['Python', 'OpenAI', 'FastAPI', 'React'],
    image: '🤖',
    stats: { messages: '100k+', accuracy: '95%', speed: '<1s' },
    color: 'from-purple-400 to-pink-500',
  },
];

export default function ProjectsShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="my-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400">Real-world applications I've built</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project.id)}
            className="group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`} />
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all h-full">
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/10 px-2 py-1 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-sm font-bold text-cyan-400">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
