import React from "react";

const Facilities = () => {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>FACILITIES AT HOSPITAL</h1>
      <div>
        <h3 className="mx-3">Ambulatory surgical centers</h3>
        <div className="row">
          <div className="col mx-5">
            <p>
              Ambulatory surgical centers, also called outpatient surgical
              facilities, allow patients to receive certain surgical procedures
              outside a hospital environment. These environments often offer
              surgeries at a lower cost than hospitals while also reducing the
              risk of exposure to infection—since patients are there for
              surgery, not to recover from sickness and disease.
            </p>
            <p>
              Ambulatory surgical centers don’t provide diagnostic services or
              clinic hours. Instead, they take patients who have been referred
              for surgery by a hospital or physician—they’re designed to be “all
              business” when it comes to surgical care.
            </p>
          </div>
          <img
            style={{ height: "240px", width: "5px", borderRadius: "4%" }}
            className="col mx-5 ms-5"
            alt="..."
            src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VyZ2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
      </div>
      <div>
        <h3 className="mx-3">Birth centers</h3>
        <div className="row">
          {" "}
          <img
            style={{ height: "220px", width: "100px", borderRadius: "4%" }}
            className="col mx-5"
            alt="..."
            src="https://ovumhospitals.com/wp-content/uploads/2019/11/hospital-ward-1338585_1920.jpg"
          />
          <div className="col mx-5">
            {" "}
            <p>
              A birth center is a healthcare facility for childbirth that
              focuses on the midwifery model, according to the American
              Association of Birth Centers. They aim to create a birth
              environment that feels more comfortable to the mother and allows
              for a cost-effective, family-inclusive birth.
            </p>
            <p>
              Birth centers are not typically equipped with the same contingency
              equipment and staff as a hospital, such as surgeons in case of a
              C-section or a neonatal intensive care unit. As a result, birth
              centers accommodate only healthy pregnancies without any known
              risk or complication factors.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mx-3">Blood banks</h3>
        <div className="row">
          <div className="col mx-5">
            {" "}
            <p>
              Blood banks allow donors to donate blood and platelets while also
              storing and sorting blood into components that can be used most
              effectively by patients.
            </p>
            <p>
              “Red blood cells carry oxygen, platelets help the blood clot and
              plasma has specific proteins that allows proper regulation of
              coagulation and healing,” writes the American Society of
              Hematology. Sometimes patients need these particular components
              specifically, and sometimes they just need lots of blood. For
              example, a single car accident victim could require as many as 100
              pints of blood.
            </p>
            <p>
              Blood is essential for human life, and it can’t be
              manufactured—only donated. So these facilities work to build the
              supply for patients who need it.
            </p>
          </div>
          <img
            style={{ height: "250px", width: "100px", borderRadius: "4%" }}
            className="col mx-5"
            alt="..."
            src="https://media.istockphoto.com/photos/patient-receiving-a-blood-transfusion-picture-id1266746953?k=20&m=1266746953&s=612x612&w=0&h=7zwX0pL745ZHvFKjUpL86kG35zI1LhP8mvK58Ml5M6c="
          />
        </div>
      </div>
      <div>
        <h3 className="mx-3">Dialysis Centers</h3>
        <div className="row">
          {" "}
          <img
            style={{ height: "250px", width: "90px", borderRadius: "4%" }}
            className="col mx-5 ms-5"
            alt="..."
            src="https://live.staticflickr.com/7560/15930417572_11162b4557_b.jpg"
          />{" "}
          <p className="col mx-3">
            Patients with kidney disease often need regular treatments of
            dialysis. Dialysis is a process that filters and cleans the blood
            artificially—the work functioning kidneys normally take on. About 14
            percent of Americans have chronic kidney disease. When kidneys
            aren’t able to filter the blood the way they are supposed to,
            patients might need dialysis as often as three times a week to avoid
            serious complications. With such high demand, dialysis facilities
            rose up to meet patient needs and avoid undue strain on hospitals.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Facilities;
