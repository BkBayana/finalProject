import '../style/Main.css';


const Main = () => {
    return (
      <main className="wrapper">
        <div className="wrapper__container ">
            <div className="wrapper__container__page">
                <div className="wrapper__container__page__text">
                    <h1 className="wrapper__container__page__title title">Welcome to the <span>Salumbekov University Attendance System</span></h1>
                </div>
            </div>
            <div className="wrapper__container__page__about">
                 <h1 className="wrapper__container__page__about_title">About</h1>
                  <h1 className="wrapper__container__page__about__text">
                     Welcome to the Salumbekov University Attendance System. At Salumbekov University, we believe that efficient attendance tracking is an essential part of student success and academic integrity. Our system is designed to streamline the process, making it easy for both students and faculty to manage attendance records, monitor participation, and ensure that every student is engaged in their learning journey.
                  </h1>
                  <h1 className="wrapper__container__page__about_title">Our mission</h1>
                  <h1 className="wrapper__container__page__about__text">Our mission is to provide a reliable, user-friendly platform that helps students stay accountable for their attendance while giving faculty the tools they need to monitor class participation effectively. The system aims to enhance the overall academic experience by fostering punctuality, responsibility, and communication between students and faculty.</h1>
              </div>
        </div>
      </main>
    );
}

export default Main;