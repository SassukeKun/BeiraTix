// components/CategoriesSection.jsx
import { Ticket, Music, Film, Users, Activity, Calendar, Palette } from "lucide-react";
import CategoryButton from "./CategoryButton";

const CategoriesSection = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', icon: Ticket, label: 'Todos' },
    { id: 'music', icon: Music, label: 'Música' },
    { id: 'cinema', icon: Film, label: 'Cinema' },
    { id: 'theater', icon: Users, label: 'Teatro' },
    { id: 'sports', icon: Activity, label: 'Esportes' },
    { id: 'workshop', icon: Calendar, label: 'Workshops' },
    { id: 'art', icon: Palette, label: 'Arte' }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-16 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <CategoryButton 
            key={category.id}
            icon={category.icon} 
            label={category.label} 
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;