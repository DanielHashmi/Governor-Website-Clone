import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Heading_2 from "@/components/Heading_2";
import { Image_Slider } from "@/components/Image_Slider";
import Landing_Page from "@/components/Landing_Page"
import Line from "@/components/Line";
import Paragraph from "@/components/Paragraph";
import Three_Cards from "@/components/Three_Cards";
import Three_Small_Cards from "@/components/Three_Small_Cards";

export default function Home() {
  return (
    <div>
      <Landing_Page />
      <Heading />
      <Paragraph />
      <Three_Cards />
      <Image_Slider />
      <Line />
      <Heading_2 txt={"Core Courses Sequence"} />
      <Three_Small_Cards card1="Programming Fundamentals" card2="Web2 Using NextJS" card3="Earn as You Learn" card1_image="/programming_fundamentals.49cca4e9.jpg" card2_image="/nextjs.3dff0f70.jpg" card3_image="/earn_as_your_learn.b8248a49.jpg" />
      <Heading_2 txt={"Advanced Courses"} />
      <Three_Small_Cards card1="Artificial Intelligence" card2="Network Programmability and
Automation" card3="Cloud-Native Computing" card1_image="/AI.39397d24.jpg" card2_image="/automation.a77dbbe8.jpg" card3_image="/cloudComputing.7260492c.jpg" />
      <Three_Small_Cards card1="Genomics and Bioinformatics" card2="Web 3 and Metaverse" card3="Ambient Computing and IoT" card1_image="/genomics.b87789f1.jpg" card2_image="/metaverse.06eccb60.jpg" card3_image="/iot.16f7b003.jpg" />
      <Footer />
    </div>
  );
}
