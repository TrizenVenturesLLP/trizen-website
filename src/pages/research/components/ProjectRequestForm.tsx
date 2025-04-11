import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProjectRequestFormProps {
  projectTitle: string;
  projectCode: string;
}

const ProjectRequestForm: React.FC<ProjectRequestFormProps> = ({ projectTitle, projectCode }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Project Request*%0A
Project: ${projectTitle}%0A
Code: ${projectCode}%0A
-------------------%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918639648822?text=${message}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Enter your full name"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="Enter your email"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          placeholder="Enter your phone number"
          className="mt-1"
        />
      </div>

      <Button 
        type="submit"
        className="w-full bg-[#393283] hover:bg-[#6c62e2] text-white"
      >
        Submit Request
      </Button>
    </form>
  );
};

export default ProjectRequestForm; 