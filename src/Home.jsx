import NavBar from './NavBar'
import Blog from './Blog'
import Footer from './Footer'
import HeroSection from './HeroSection'


const data = [
    {number: '01', person: 'Jarrod Overson', comment: "Was Rust Worth It?", date: 'Oct 26', read: '8 min read'},
    {number: '02', person: 'Aditya Chaudhary', comment: "App dev or Web dev? ", date: 'Nov 5', read: '6 min read'},
    {number: '03', person: 'Ashley Mayer', comment: "We need more women founders on offense", date: 'Nov 1', read: '3 min read'},
    {number: '04', person: 'Netflix', comment: 'Streaming SQL in Data mesh', date: 'Nov 3', read: '7 min read'},
    {number: '05', person: 'Pedro Minate', comment: 'Announcing the Arduino', date: 'Nov 2', read: '6 min read'},
    {number: '06', person: 'Bhoomy Singh', comment: "What was the hardest thing about quitting my job at google", date: 'Nov 3', read: '2 min read'},
  
  ]
  
  const blogData =[
    {person: 'Barack Obama', title: 'What I\'m reading on the Rise of Artificial Intelligence', blog: 'Earlier this week, President Biden issued an executive order on artifical intelligence -- a breakthrough technology that has', time: 'Nov 3', minute: '5'},
    { person: "Elon Musk", title: "The Future of Space Exploration", blog: "SpaceX, Tesla, and Neuralink are pioneering technologies that will shape the future of humanity's presence in space. In this blog post, Elon Musk discusses the exciting possibilities and challenges of space exploration.", time: 'Nov 8' , minute: '7'},
    { person: "Ada Lovelace", title: "The Birth of Computer Programming", blog: "In the 19th century, Ada Lovelace wrote the world's first algorithm intended for implementation on Charles Babbage's Analytical Engine. This blog post explores her groundbreaking work and its impact on modern computer programming.", time: 'Oct 5', minute: '10' },
    { person: "Jane Goodall", title: "Conservation and the Future of Our Planet", blog: "Renowned primatologist Jane Goodall shares insights into the importance of conservation efforts in preserving biodiversity and ensuring a sustainable future for all living beings on Earth.", time: 'Jan 22', minute: '2' },
    { person: "Malala Yousafzai", title: "Empowering Girls Through Education", blog: "Nobel laureate Malala Yousafzai discusses the transformative power of education, particularly for girls in regions where access to schooling is limited. She shares inspiring stories and advocates for global initiatives to promote education for all.", time: 'Feb 16', minute: '8' }
  ]
  
  const buttons = ['Programming', 'Data science', 'Technology', 'Self Improvement', 'Writing', 'Relationships',
  'Machine learning', 'Productivity', 'Politics']
  
  
  const contract = ['Help', 'Status', 'About', 'Careers', 'Blog', 'Privacy', 'Terms', 'Text to Speech', 
  'Teams']
  


function Home(){
    return(
        <>
            <NavBar/>
            <HeroSection/>
            <Blog data={data}/>
            <Footer blogData={blogData} buttons={buttons} contract={contract}/>
        </>
    )
}

export default Home