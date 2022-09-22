import React from 'react';
import IMG1 from '../../assets/sadhya.jpeg';
import IMG2 from '../../assets/pookalam.webp';
import IMG3 from '../../assets/pulikkali.jpeg';
import IMG4 from '../../assets/olakkuda.webp';
import IMG5 from '../../assets/thiruvathira.jpeg';
import IMG6 from '../../assets/payasam.jpeg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Sadhya',
      img: IMG1,
      description:
        'Onam Sadhya is a huge part of the Onam festival. It is a traditional Kerala-style meal served on a banana leaf. The dishes served on a Sadhya platter include inji puli, pachadi, thoran, olan, sambar and many more. And we love to devour this delicious spread every single year.',
      link: 'https://timesofindia.indiatimes.com/life-style/food-news/everything-you-need-to-know-about-onam-sadhya/photostory/77755831.cms?picid=77755853',
    },
    {
      id: 2,
      title: 'Pookalam',
      img: IMG2,
      description:
        'The Onam Pookalam is made round in shape and filled with complex detailing of colourful flower petals. The rangoli made on the first day of Onam is known as "Athapoo", which is made using Athapookalam flowers. Similarly, different designs of rangolis are made using a wide variety of flowers on different days of Onam.',
      link: 'https://english.jagran.com/lifestyle/onam-pookalam-2022-tulasi-chethi-chemparathy-flowers-to-use-for-making-rangoli-latest-floral-rangoli-designs-10048866',
    },
    {
      id: 3,
      title: 'Pulikali',
      img: IMG3,
      description: 'Pulikali is also known as Kaduvakali is a colorful recreational folk art that is performed by trained artists to entertain people on the occasion of Onam, an annual harvest festival where artists dance wildly and mimic hunting moves to the beat of drums.',
      link: 'https://irisholidays.com/keralatourism/pulikali/#:~:text=Pulikali%20is%20also%20known%20as,to%20the%20beat%20of%20drums.',
    },
    {
      id: 4,
      title: '“Olakkuda',
      img: IMG4,
      description:
        '“Olakkuda has great cultural significance. During Onam, it is an inevitable part for Onapottan (a folk character). Many countries like Indonesia are going back to the past and bringing back the traditional umbrellas like palm leaf parasols. In Kerala, it has more cultural significance and many intricacies.',
      link: 'https://www.newindianexpress.com/cities/thiruvananthapuram/2019/sep/06/the-craft-that-stood-the-test-of-time-2029425.html#:~:text=%E2%80%9COlakkuda%20has%20great%20cultural%20significance,cultural%20significance%20and%20many%20intricacies.',
    },
    {
      id: 5,
      title: 'Thiruvathirakali',
      img: IMG5,
      description:
        'Thiruvathirakali or Kaikottikaliis a unique dance performed in Kerala on the auspicious day of Thiruvathira, the birthday of Lord Shiva. It is performed by women who seek blessings for eternal marital bliss. It falls in the Malayalam month of Dhanu (December-January).',
      link: 'https://www.keralatourism.org/artforms/thiruvathirakali/21',
    },
    {
      id: 6,
      title: 'Payasam',
      img: IMG6,
      description:
        'Kerala’s very own dessert, Payasam, is an inevitable part of Onam Sadya and leaves behind sweet and contented memories. The sweet pudding is often served mid-way through the meal. Even though it is an important part of vegetarian feast Sadya, Payasam finds its place on any dining table irrespective of the occasion.',
      link: 'https://lukinoo.github.io/math-resource/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Favoriets</h5>
      <h2>Special</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
