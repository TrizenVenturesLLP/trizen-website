
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const GallerySection = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "workshops", label: "Workshops" },
    { id: "projects", label: "Projects" },
    { id: "designs", label: "UI/UX Designs" },
    { id: "events", label: "Events" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "workshops",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "AI Workshop at Tech University",
      description: "Students engaged in hands-on AI model training"
    },
    {
      id: 2,
      category: "projects",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Collaborative Research Project",
      description: "Team working on cutting-edge machine learning research"
    },
    {
      id: 3,
      category: "designs",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Mobile App UI Design",
      description: "User interface design for an education platform"
    },
    {
      id: 4,
      category: "events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Annual Tech Conference",
      description: "Presenting the latest in AI and cloud technologies"
    },
    {
      id: 5,
      category: "workshops",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Web Development Bootcamp",
      description: "Intensive training on full-stack web development"
    },
    {
      id: 6,
      category: "designs",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      title: "Dashboard Design",
      description: "Data visualization and analytics interface"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-trizen-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-dark mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our workshops, projects, designs, and events through these visual highlights.
          </p>
        </div>

        {/* Filter Categories */}
        <ScrollArea className="w-full mb-8">
          <div className={`flex ${isMobile ? 'overflow-x-auto' : 'flex-wrap justify-center'} gap-3 mb-8 pb-2`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${activeCategory === category.id 
                    ? 'bg-trizen-purple text-white' 
                    : 'bg-white text-trizen-dark hover:bg-gray-100'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollArea>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
