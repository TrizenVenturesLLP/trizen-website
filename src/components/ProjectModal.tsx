import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MessageCircle } from "lucide-react";
import { ResearchProject } from "@/lib/researchAreas";

interface ProjectModalProps {
  project: ResearchProject;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-indigo-900">{project.title}</DialogTitle>
          <DialogDescription className="text-lg text-slate-600">{project.summary}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-indigo-800">Project Description</h3>
            <p className="text-slate-600">{project.description}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Progress</span>
              <span className="text-sm font-medium text-indigo-700">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Timeline</span>
              </div>
              <p className="text-sm font-medium text-indigo-800">{project.timeline}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="h-4 w-4" />
                <span className="text-sm">Research Lead</span>
              </div>
              <p className="text-sm font-medium text-indigo-800">{project.lead}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <span className="text-sm text-slate-600">Team Members</span>
            <div className="flex flex-wrap gap-2">
              {project.team.map((member, index) => (
                <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {member}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-4 pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open(project.whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 