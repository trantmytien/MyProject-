import React from 'react';
import styles from './CV.module.css';

const CV = () => {
  const moment = {
    name: 'TIEN TRAN THI MY',
    birthdate: '07-29-2002',
    hometown:'Hoai Nhon, Binh Dinh, Viet Nam.',
    residence: 'Hoa Vang, Da Nang, Viet Nam.',
    internship: 'Internship Font-End & Tester',
    career: 'Tôi muốn trở thành một Lập trình viên Front-End và Kiểm thử viên phần mềm tận tâm. Với kiến thức về HTML, CSS và kiểm thử phần mềm. Hiện tại tôi đang trau dồi thêm kiến thức về React, Kiểm thử và Tiếng Anh để có cơ hội phát triển hơn trong tương lai. Tôi có thể học hỏi liên tục trong lĩnh vực công nghệ để xây dựng sự trải nghiệm tốt nhất cho người dùng và đảm bảo chất lượng cao cho phần mềm. Mục tiêu của tôi là đóng góp vào các dự án sáng tạo và mang lại giá trị thông qua chuyên môn của mình, cuối cùng là tạo ảnh hưởng tích cực trong lĩnh vực phát triển phần mềm.',
    phone: '0399501219',
    zalo: '0399501219',
    education: 'Duy Tan University',
    major: 'Chuyên ngành: Công nghệ phần mềm, 2020 - 2024',
    center:'SoftTech',
    training:'Khóa đào tạo lập trình Font-end (HTML, CSS, React),  ',
    projects: 'Font-end: Website giới thiệu biển và dịch vụ (HTML,CSS), Font-end: Tạo CV bằng React (HTML,CSS)',
    interests: 'Chơi thể thao, Hoạt động nhóm, Du lịch, Phát triển bản thân, Tham gia và trải nghiệm các hoạt động cộng đồng',
    skills: 'HTML, CSS, Thiết kế TestCase & Kiểm thử phần mềm, Làm việc nhóm, Quản lý thời gian',

  };

  function Header() {
    return (
      <div className={styles.CVHeader}>
        <div></div>
        <img src="./images/cv1.jpg" alt="images" className={styles.profileImage} />
      
          <div className={styles.infoRow}>
            <div className={styles.leftColumn}>
              <h1>{moment.name}</h1>
              <p>{moment.internship}</p>
              <h2>{moment.birthdate}</h2>
              <h3>Hometown: {moment.hometown} </h3>
              <h3>Current residence: {moment.residence} </h3>
            </div>
          </div>
     
      </div>
    );
  }
  function Contact() {
    return (
      <div className={styles.CVSection}>
        <h2>Contact</h2>
        <p>Email: <a href='tientranmy566@gmail.com'>tientranmy566@gmail.com</a></p>
        <p>Phone: {moment.phone}</p>
        <p>Facebook: <a href='https://www.facebook.com/tranmytienn'>https://www.facebook.com/tranmytienn</a></p>
        <p>Zalo: {moment.zalo}</p>
      </div>
    )
  }
  function Education() {
    return (
      <div className={styles.CVSection}>
        <h2>Education</h2>
        <h3>{moment.education}</h3>
        <p>{moment.major}</p>
        <h3>{moment.center}</h3>
        <p>{moment.training}</p>
      </div>
    )
  }
  function Projects() {
    return (
      <div className={styles.CVSection}>
        <h2>Personal projects</h2>
        <ul>
          {moment.projects.split(', ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Link sản phẩm: <a href='https://github.com/trantmytien/MyProject-'>https://github.com/trantmytien/MyProject-</a></p>
      </div>
    )
  }
  function Career() {
    return (
      <div className={styles.CVSection}>
        <h2>Career Objective</h2>
        <p className={styles.objectCareer}>
          {moment.career}</p>
      </div>
    )
  }

  function Interests() {
    return (
      <div className={styles.CVSection}>
        <h2>Interests</h2>
        <ul>
          {moment.interests.split(', ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
  function Skills() {
    return (
      <div className={styles.CVSection}>
        <h2>Skills</h2>
        <ul>
          {moment.skills.split(', ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={styles.CVContainer}>
      <Header />
      <Contact />
      <Education />
      <Projects />
      <Career />
      <Interests />
      <Skills />
    </div>
  );
};

export default CV;
