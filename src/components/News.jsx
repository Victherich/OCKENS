// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { FaNewspaper } from "react-icons/fa";
// import newsimg from '../Images/901.jpg'

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [heroIndex, setHeroIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get("https://www.reddit.com/r/news/top.json?limit=10")
//       .then((response) => {
//         const articles = response.data.data.children.map((child) => child.data);
//         setNews(articles);
//       })
//       .catch((error) => console.error("Error fetching news:", error));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHeroIndex((prevIndex) => (prevIndex + 1) % news.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [news]);

//   return (
//     <Container>
//       <Title>Reddit News</Title>

//       {/* Hero Section */}
//       {news.length > 0 && (
//         <HeroSection>
//           {news.slice(0, 5).map((article, index) => (
//             <HeroSlide key={article.id} style={{ transform: `translateX(-${heroIndex * 100}%)` }}>
//               <NewsImage src={newsimg} alt={article.title} />
//               <NewsTitle>{article.title}</NewsTitle>
//             </HeroSlide>
//           ))}
//         </HeroSection>
//       )}

//       {/* News Grid */}
//       <NewsGrid>
//         {news.map((article) => (
//           <NewsCard key={article.id}>
//             <NewsImage src={newsimg || "https://via.placeholder.com/300"} alt={article.title} />
//             <FaNewspaper size={40}/>
//             <NewsTitle>{article.title}</NewsTitle>
//             <NewsMeta>🔗 {article.domain} | 👍 {article.ups}</NewsMeta>
//           </NewsCard>
//         ))}
//       </NewsGrid>
//     </Container>
//   );
// };

// export default News;

// // Styled Components
// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 20px;
//   background: white;
// `;

// const Title = styled.h1`
//   color: #0092cf;
//   text-align: center;
// `;

// const HeroSection = styled.div`
//   display: flex;
//   overflow: hidden;
//   width: 100%;
//   height: 250px;
//   position: relative;
// `;

// const HeroSlide = styled.div`
//   flex: 0 0 100%;
//   transition: transform 0.5s ease-in-out;
// `;

// const NewsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   margin-top: 20px;
// `;

// const NewsCard = styled.div`
//   background: #f9f9f9;
//   padding: 15px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
// `;

// const NewsImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const NewsTitle = styled.h3`
//   color: #0092cf;
//   margin-top: 10px;
// `;

// const NewsMeta = styled.p`
//   font-size: 12px;
//   color: gray;
// `;



import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaNewspaper } from "react-icons/fa";
import newsimg from "../Images/901.jpg";

const News = () => {
  const [news, setNews] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/news/top.json?limit=10")
      .then((response) => {
        const articles = response.data.data.children.map((child) => child.data);
        setNews(articles);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [news]);

  return (
    <Container>
      <Title>World News</Title>

      {/* Hero Section */}
      {news.length > 0 && (
        <HeroSection>
          <HeroWrapper style={{ transform: `translateX(-${heroIndex * 100}%)` }}>
            {[...news, ...news].map((article, index) => (
              <HeroSlide key={index}>
                <NewsImage src={newsimg} alt={article.title} />
                <NewsTitle>{article.title}</NewsTitle>
              </HeroSlide>
            ))}
          </HeroWrapper>
        </HeroSection>
      )}

      {/* News Grid */}
      <NewsGrid>
        {news.map((article) => (
          <NewsCard key={article.id}>
            <NewsImage src={newsimg || "https://via.placeholder.com/300"} alt={article.title} />
            <FaNewspaper size={40} />
            <NewsTitle>{article.title}</NewsTitle>
            <NewsMeta>🔗 {article.domain} | 👍 {article.ups}</NewsMeta>
            <ReadMore href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </ReadMore>
          </NewsCard>
        ))}
      </NewsGrid>
    </Container>
  );
};

export default News;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background: white;
`;

const Title = styled.h1`
  color: #0092cf;
  text-align: center;
`;

const HeroSection = styled.div`
  overflow: hidden;
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
`;

const HeroWrapper = styled.div`
  display: flex;
  width: 200%;
  transition: transform 0.5s ease-in-out;
`;

const HeroSlide = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const NewsCard = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const NewsTitle = styled.h3`
  color: #0092cf;
  margin-top: 10px;
  text-align: center;
`;

const NewsMeta = styled.p`
  font-size: 12px;
  color: gray;
`;

const ReadMore = styled.a`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #0092cf;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: #007bb5;
  }
`;
