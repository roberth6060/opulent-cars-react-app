import { ArticleContainer, ArticleImage } from "./style/ArticleItems";
import Article1 from  "../../../assets/images/ezgif.com-webp-to-jpg.jpg";
import Article2 from  "../../../assets/images/photo-1552656967-7a0991a13906.avif";
import Article3 from  "../../../assets/images/photo-1533558701576-23c65e0272fb.avif";

const ArticleItems = ()=> {
    return (
        <ArticleContainer>
          <h2>Articles</h2>
          <div className="row">
            <a href="./pages/article1.html" className="card-container">
              <ArticleImage src={Article1}/>
              <h4>History of Luxury Cars</h4>
              <p>
                The history of luxury cars can be traced back to the early 1900s, when the first luxury vehicles were....
              </p>
            </a>
            <a href="./pages/article2.html" className="card-container">
              <ArticleImage src={Article2}/>
              <h4>Why Luxury Car Are So Expensive</h4>
              <p>
                Luxury cars are expensive for a number of reasons. One of the main reasons is the materials and...
              </p>
            </a>
            <a href="./pages/article3.html" className="card-container">
              <ArticleImage src={Article3}/>
              <h4>Why People Like Luxury Cars</h4>
              <p>
                People like luxury cars for a variety of reasons. For some, it's
                the prestige and status that comes with owning a...
              </p>
            </a>
          </div>
        </ArticleContainer>
    )
}

export default ArticleItems;