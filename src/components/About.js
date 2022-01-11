import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <div
        className="container"
        style={{
          backgroundImage: "url(/pharmacy1.gif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="container">
          <br />
          <br />
          <h3>Overview</h3>
          <p>
            QuickHeal Hospitals is one of India's foremost multi-specialty
            healthcare providers catering to both Indian and international
            patients. We are a part of the QuickHeal Education and Medical Group
            (QEMG), a leader in the areas of education and healthcare. With more
            than 5000 operational beds, our commitment to the overall well-being
            of an individual is at the core of everything we do. Through our
            network of hospitals and experienced team of medical professionals,
            we provide quality and affordable healthcare to everyone.
          </p>
        </div>
        <div className="container">
          <h3>Our Core Values</h3>
          <p>
            At QuickHeal Hospitals, we are devoted towards clinical excellence,
            patient-centricity, and ethical practices. Our commitment to
            clinical excellence is palpable in the high calibre of our team of
            medical practitioners. Our nursing staff and paramedical
            professionals are highly competent and provide great support to our
            clinical team Our healthcare services are aligned towards our
            patients’ needs. Creating a compassionate and supportive environment
            for patients and their caregivers is of utmost importance to us. Our
            patient-first approach has earned us the goodwill of patients not
            just from within India, but also from across the world including the
            Middle East, Africa, and South-East Asia. We attach the highest
            importance to ethical practices which is evident in our professional
            conduct, honesty, trust, and confidentiality.
          </p>
        </div>
        <div className="container">
          <h3>Our Expertise</h3>
          <p>
            We offer an integrated range of healthcare services from out-patient
            treatment and diagnostics to advanced clinical care which also
            extends to personalised home-care services. We keep pace with the
            latest technological breakthroughs in medical science and equip our
            hospitals with state-of-the-art facilities on par with global
            standards. From the simplest to the most complex medical problems,
            we deliver the most cutting-edge treatment. We serve thousands of
            patients through our network of hospitals every day and offer
            quality healthcare to people from India and overseas. Through our
            association with the QuickHeal Foundation and other NGOs, we provide
            affordable healthcare services to the less privileged sections of
            the society.
          </p>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="img-thumbnail"
              alt="..."
              style={{ height: "300px" }}
            />
          </div>
          <div className="col-md-9 mt-3 pt-5">
            <h4>Elizabeth Alea</h4>
            <div>
              {" "}
              <p>Chief Executive Officer, Quickheal Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
