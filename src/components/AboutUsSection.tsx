
import { Users, Heart, Target, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsSection = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-trizen-purple" />,
      title: "Passion",
      description: "We're passionate about empowering individuals through technology and education."
    },
    {
      icon: <Users className="h-6 w-6 text-trizen-purple" />,
      title: "Community",
      description: "We believe in building strong, supportive communities that foster growth and innovation."
    },
    {
      icon: <Target className="h-6 w-6 text-trizen-purple" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from training to development."
    },
    {
      icon: <Clock className="h-6 w-6 text-trizen-purple" />,
      title: "Adaptability",
      description: "We embrace change and continuously evolve our approaches to stay at the forefront."
    }
  ];

  const teamMembers = [
    {
      name: "Jane Smith",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "John Doe",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Emily Wang",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-dark mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate technologists committed to helping individuals and businesses harness the power of AI and web technologies.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-trizen-dark mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-trizen-dark mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
