import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projectsData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Category stats
  const categoryStats = useMemo(() => {
    const stats = { All: PROJECTS.length };
    PROJECTS.forEach((project) => {
      stats[project.category] = (stats[project.category] || 0) + 1;
    });
    return stats;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-brand-dark dark:via-slate-950 dark:to-brand-dark">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(35,141,69,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(11,159,211,0.15),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <RevealOnScroll direction="up" delay={0.1}>
              <Badge variant="secondary" size="md">
                Our Portfolio
              </Badge>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Projects That Drive{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Real Impact
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                From e-Governance platforms to healthcare solutions, explore 24+ case studies 
                showcasing our expertise in building mission-critical software for government, 
                education, and enterprise sectors.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">24+</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Projects</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Delivered</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">60+</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Clients</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Satisfied</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">7+</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Years</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Experience</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section className="sticky top-20 z-30 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl border-y border-slate-200/40 dark:border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by name or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-soft/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
              
              <div className={`${showFilters ? 'flex' : 'hidden'} lg:flex flex-wrap gap-2`}>
                {PROJECT_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {category}
                    <span className="ml-1.5 text-xs opacity-70">
                      ({categoryStats[category] || 0})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(selectedCategory !== 'All' || searchQuery) && (
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">Active filters:</span>
              {selectedCategory !== 'All' && (
                <Badge variant="primary" size="sm">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="ml-1 hover:text-primary-dark"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" size="sm">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-1 hover:text-secondary-deep"
                  >
                    ×
                  </button>
                </Badge>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="ml-2 text-primary hover:text-primary-dark dark:text-primary-soft dark:hover:text-primary font-medium underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              Showing <span className="font-bold text-slate-900 dark:text-white">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProjects.map((project, idx) => (
                  <RevealOnScroll
                    key={project.id}
                    direction="up"
                    delay={0.1 * (idx % 3)}
                  >
                    <Card
                      variant="glass"
                      className="h-full flex flex-col group cursor-pointer"
                    >
                      {/* Project Image */}
                      <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950/50 mb-4 aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback */}
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-primary to-secondary items-center justify-center text-white text-5xl">
                          {project.category === 'Government' ? '🏛️' : 
                           project.category === 'Healthcare' ? '🏥' : 
                           project.category === 'Smart City' ? '🏙️' : 
                           project.category === 'Education' ? '🎓' : 
                           project.category === 'Enterprise' ? '💼' : '📱'}
                        </div>
                        
                        {/* Category Badge Overlay */}
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant={
                              project.category === 'Government' ? 'primary' :
                              project.category === 'Healthcare' ? 'success' :
                              project.category === 'Smart City' ? 'secondary' :
                              project.category === 'Education' ? 'info' :
                              'muted'
                            }
                            size="sm"
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="flex-grow flex flex-col space-y-3">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-300 leading-snug">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </RevealOnScroll>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20"
              >
                <div className="max-w-md mx-auto space-y-4">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    No projects found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Try adjusting your filters or search query to find what you're looking for.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/40 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              Ready to Start Your Project?
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Join 60+ satisfied clients who trust EntroLabs for their mission-critical software. 
              Let's discuss how we can help transform your business.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" to="/contact">
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" to="/services">
                Explore Services
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
