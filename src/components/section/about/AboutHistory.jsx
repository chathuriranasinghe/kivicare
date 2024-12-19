import React from 'react'
import { Container } from 'react-bootstrap';

// Widgets
import Title from '../../widgets/Title';
import ScrollingText from '../../widgets/ScrollingText';
import History from '../../widgets/History';

// Images
import history1 from '/assets/images/pages/history-1.png'
import history2 from '/assets/images/pages/history-2.png'
import history3 from '/assets/images/pages/history-1.png'
import history4 from '/assets/images/pages/history-2.png'

export default function AboutHistory() {
    const historyData = [
        {
          historyImage: history1,
          historyYear: "2012 – 2013",
          historyDesc: "Our journey began in a small village with a commitment to preserve and promote the ancient Ayurvedic healing traditions passed down through generations. With a focus on natural remedies and holistic well-being, we started treating local patients with personalized care."
        },
        {
          historyImage: history2,
          historyYear: "2013 – 2014",
          historyDesc: "As word spread about our effective treatments and genuine dedication, more people sought our expertise. We expanded our services to include traditional therapies such as Panchakarma, herbal formulations, and lifestyle consultations tailored to individual body constitutions (Doshas)."
        },
        {
          historyImage: history3,
          historyYear: "2014 – 2015",
          historyDesc: "With growing demand, we established Pasyale Wedamedura as a dedicated Ayurvedic treatment center. This marked the beginning of a more structured approach to serving our patients, offering not only treatment but also education on preventive health and Ayurveda."
        },
        {
          historyImage: history4,
          historyYear: "2015 – 2020",
          historyDesc: "To meet the increasing needs of patients locally and globally, we integrated modern infrastructure while staying true to our Ayurvedic roots. During this time, we introduced advanced Ayurvedic therapies, wellness programs, and workshops to spread the knowledge of Ayurveda far and wide."
        }
    ]
  return (
    <div className="section-padding bg-secondary-subtle text-body position-relative">
        <Container>
          <div className="text-left position-relative">
              <ScrollingText scrollTitle="Our History" />
          </div>
          <Title subTitle="HISTORY" rightText="Our " leftText="History" />
          <ul className="list-inline m-0">
            {historyData.map((item, index) => (
              <li className="mb-5 pb-5 border-bottom" key={index}>
                <History historyImage={item.historyImage} historyYear={item.historyYear} historyDesc={item.historyDesc} />
              </li>
            ))}              
          </ul>
        </Container>
    </div>
  )
}
