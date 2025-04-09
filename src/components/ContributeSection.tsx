
import { HandHeart, GraduationCap, PresentationIcon, MessageSquareCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContributeSection = () => {
  const contributionOptions = [
    {
      icon: <HandHeart className="h-10 w-10 text-trizen-purple" />,
      title: "Volunteer",
      description: "Share your expertise by volunteering as a mentor for our training programs or contributing to our open-source projects.",
      action: "Join as Volunteer"
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-trizen-purple" />,
      title: "Become a Speaker",
      description: "Share your knowledge and experiences as a speaker at our workshops, webinars, or conference events.",
      action: "Apply as Speaker"
    },
    {
      icon: <PresentationIcon className="h-10 w-10 text-trizen-purple" />,
      title: "Host a Workshop",
      description: "Partner with us to host workshops or training sessions at your organization or educational institution.",
      action: "Host an Event"
    },
    {
      icon: <MessageSquareCode className="h-10 w-10 text-trizen-purple" />,
      title: "Open Source",
      description: "Contribute to our open-source projects, helping us build better tools and resources for the community.",
      action: "View Projects"
    }
  ];

  return (
    <section id="contribute" className="py-16 bg-trizen-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trizen-dark mb-4">Contribute</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            There are many ways to get involved and contribute to our community. Join us in making a difference!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributionOptions.map((option, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-5 bg-trizen-purple/10 p-4 rounded-full">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button 
                  className="mt-auto bg-trizen-purple hover:bg-trizen-purple/90"
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-trizen-dark mb-4">Have Other Ideas?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always open to new partnerships and collaboration opportunities. Reach out to us with your ideas!
          </p>
          <Button 
            className="bg-trizen-purple hover:bg-trizen-purple/90 px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
