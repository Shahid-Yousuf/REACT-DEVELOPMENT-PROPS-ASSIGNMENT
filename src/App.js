import logo from './logo.svg';
import './App.css';
import ImageComponent from './components/ImageComponent';
import { HeadlineComponent } from './components/HeadlineComponent';
import DescriptionComponent from './components/DescriptionComponent';
function App() {
   return <div className="container">
            <h1>Sir i created only three components</h1>
            <h4>Image Component</h4>
            <h4>Headline Component</h4>
            <h4>Description Component</h4>
            <h1> i reuse the above  components and changes  props value only </h1>

               <div class="flexBox">
                    <div>
                      <ImageComponent imgSrc="https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/WHO-Sexual-Misconduct-0_1676114544465_1676114544465_1676114584491_1676114584491.jpg"/>
                    </div>
                    <div>
                          <HeadlineComponent headLine="WHO chief Tedros Adhanom arrives in Syria's quake-hit Aleppo"/>
                          <DescriptionComponent description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ante mi, ut eleifend ex luctus non. Vestibulum scelerisque pellentesque metus quis aliquam. Cras pharetra egestas turpis, non pharetra nunc. Vestibulum aliquam justo lacus, quis egestas urna dignissim non. Etiam tristique suscipit ex, et aliquam turpis scelerisque vitae. Ut sit amet auctor magna. Vestibulum vel tellus nunc. Fusce et consequat magna, quis lacinia nunc. Nam semper magna ut malesuada porttitor. Nam eu purus sem. Praesent ac lectus in augue dictum rutrum at eget enim. Nullam suscipit egestas posuere. Nulla non nunc lorem. Nulla pharetra turpis quis orci tristique aliquam. Sed luctus suscipit lacus, quis pellentesque enim tempus rutrum." />

                    </div>
              </div>
              
              <div class="flexBox">
                    <div>
                      <ImageComponent imgSrc="https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/PTI02-11-2023-000090A-0_1676106949180_1676106949180_1676106965714_1676106965714.jpg"/>
                    </div>
                    <div>
                          <HeadlineComponent headLine="Earlier, Left cadre would capture Tripura police stations, but now…': PM Modi"/>
                          <DescriptionComponent description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ante mi, ut eleifend ex luctus non. Vestibulum scelerisque pellentesque metus quis aliquam. Cras pharetra egestas turpis, non pharetra nunc. Vestibulum aliquam justo lacus, quis egestas urna dignissim non. Etiam tristique suscipit ex, et aliquam turpis scelerisque vitae. Ut sit amet auctor magna. Vestibulum vel tellus nunc. Fusce et consequat magna, quis lacinia nunc. Nam semper magna ut malesuada porttitor. Nam eu purus sem. Praesent ac lectus in augue dictum rutrum at eget enim. Nullam suscipit egestas posuere. Nulla non nunc lorem. Nulla pharetra turpis quis orci tristique aliquam. Sed luctus suscipit lacus, quis pellentesque enim tempus rutrum." />

                    </div>
              </div>
              <div class="flexBox">
                    <div>
                      <ImageComponent imgSrc="https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/MahmoodMadani_1_1676114406502_1676114412824_1676114412824.jpg"/>
                    </div>
                    <div>
                          <HeadlineComponent headLine="India belongs to me as much as to PM Modi; best country for…’: Muslim body head"/>
                          <DescriptionComponent description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ante mi, ut eleifend ex luctus non. Vestibulum scelerisque pellentesque metus quis aliquam. Cras pharetra egestas turpis, non pharetra nunc. Vestibulum aliquam justo lacus, quis egestas urna dignissim non. Etiam tristique suscipit ex, et aliquam turpis scelerisque vitae. Ut sit amet auctor magna. Vestibulum vel tellus nunc. Fusce et consequat magna, quis lacinia nunc. Nam semper magna ut malesuada porttitor. Nam eu purus sem. Praesent ac lectus in augue dictum rutrum at eget enim. Nullam suscipit egestas posuere. Nulla non nunc lorem. Nulla pharetra turpis quis orci tristique aliquam. Sed luctus suscipit lacus, quis pellentesque enim tempus rutrum." />

                    </div>
              </div>
              
              
          </div>
}

export default App;
