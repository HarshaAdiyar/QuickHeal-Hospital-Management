import "./Laboratory.css";
import React from "react";

export default function Laboratory() {
  return (
    <div
      style={{ backgroundImage: "linear-gradient(to left, black, 1%,cyan)" }}
    >
      <div className="container">
        <div>
          <br />
          <h2 id="h2-lab">LABORATORY DEPARTMENTS</h2>
          <p id="p-lab">
            Quickheal Health maintains a full-service laboratory performing
            clinical analysis on blood, tissue and other body fluids. The
            laboratory provides much of the clinical data used by physicians to
            diagnose and treat disease and to monitor patient’s health or
            wellness. The laboratory is fully accredited by the College of
            American Pathology (CAP) and meets CLIA certification requirements.
            The laboratory is directed by a board certified Clinical and
            Anatomic Pathologist. Technologists and technicians perform a
            variety of analysis on state-of-the-art instrumentation in:
          </p>
          <ul>
            <li id="li-lab">Urinalysis</li>
            <li id="li-lab">Bacteriology</li>
            <li id="li-lab">Transfusion services</li>
            <li id="li-lab">Hematology</li>
            <li id="li-lab">Chemistry</li>
            <li id="li-lab">Immunology</li>
            <li id="li-lab">Coagulation</li>
            <li id="li-lab">Toxicology</li>
          </ul>
          <p id="p-lab">
            Pathology services include cytology and histology procedures. Test
            results of clinical lab data are securely distributed based on
            individual patient needs. The hospital will handle processing of lab
            tests and lab billing for all Quickheal Health patients, including
            Quickheal and Rushford Clinic patients. Patients may receive
            separate bills for lab work and physician services.
          </p>
        </div>
        <div>
          <h3 id="h3-lab">SPECIMEN ACCESSIONING AND LABELING</h3>
          <p id="p-lab">
            Once a specimen has been collected by a phlebotomist, nurse,
            physician, or other healthcare professional, it is sent to the
            laboratory for testing. In large hospitals, specimens may be sent
            directly to the laboratory from the patient care area via a
            pneumatic tube system, whereas smaller hospitals will have specimens
            picked up and dropped off by laboratory couriers. Once at the
            laboratory, specimens are received, sorted, registered, and then
            marked as “received” in the Laboratory Information System (LIS)
            before being labeled and processed for testing. This entire check-in
            process is often referred to as specimen accessioning and
            processing.
          </p>
          <p id="p-lab">
            One of the primary responsibilities of specimen accessioning is to
            catch pre-analytical errors before the specimens are processed for
            testing. This involves ensuring:
          </p>
          <ul>
            <li id="list">
              <b>Proper specimen labeling:</b> At a minimum, specimens mut be
              labeled with the patient’s full name and date of birth.
            </li>
            <li id="list">
              <b>Correct specimen type:</b> Different tests require different
              types of specimens to be collected. For example, hematology
              testing usually requires whole blood specimens collected in EDTA
              tubes (for CBC testing) or sodium citrate tubes (for coagulation
              studies), whereas chemistry test usually require blood serum or
              heparinized plasma. Other specimens include urine, stool, sputum,
              tissue, and other body fluids.
            </li>
            <li id="list">
              <b>Adequate specimen volume:</b> A minimum volume requirement is
              determined for each test offered by the laboratory. If a specimen
              does not meet the minimum volume requirements, the test will be
              cancelled as “quantity not sufficient” or “QNS” and the patient
              will need to provide a new sample.
            </li>
            <li id="list">
              <b>Stable specimen condition:</b> The date of collection and the
              temperature at which the specimens are stored must be checked to
              ensure specimen integrity. For instance, many tests allow
              specimens to be processed and stored for longer periods of time if
              they are stored in a refrigerated or frozen state.
            </li>
          </ul>
          <p id="p-lab">
            After the specimen passes the accessioning requirements, it is
            labeled, processed, and routed to the other departments of the
            laboratory.
          </p>
          <h5 id="h5-lab">Who works here?</h5>
          <ul>
            <li id="li-lab">Phlebotomists </li>
            <li id="li-lab">Couriers</li>
            <li id="li-lab">Registration</li>
            <li id="li-lab">Medical laboratory assistants, MLA(ASCP)</li>
            <li id="li-lab">Medical laboratory technicians, MLT(ASCP)</li>
            <li id="li-lab">Medical laboratory scientists, MLS(ASCP)</li>
            <li id="li-lab">LIS specialists</li>
            <li id="li-lab">Patient outreach specialists</li>
          </ul>
        </div>
        <div>
          <h3 id="h3-lab">ANATOMICAL PATHOLOGY</h3>
          <p id="p-lab">
            The medical laboratory is usually divided into an anatomical
            pathology branch and a clinical pathology branch, each made up of
            multiple departments. Larger laboratories may also contain a
            molecular pathology branch and a forensic pathology branch, while
            smaller laboratories will send specimens out to bigger labs for this
            type of testing.
          </p>
          <img
            src="https://malse.natsci.msu.edu/sites/_malse/assets/Image/image.png"
            alt="..."
          />
          <p id="p-lab">
            Anatomical pathology involves studying the effects of disease on the
            structure of organs, tissues, and cells. Anatomical pathology is
            typically made up of a cytotechnology department and a
            histology/gross anatomical pathology department.
          </p>
          <h4 id="h4-lab">Cytotechnology</h4>
          <p id="p-lab">
            Cytotechnology (also known as cytology) involves the microscopic
            study of cells to detect cancer and other cellular abnormalities in
            fluids such as PAP smears, cerebrospinal fluid, urine, and blood.
            Pathologists and cytotechnologists usually work alongside each other
            to identify abnormal cells present in fluids.
          </p>
          <h5>Who works here?</h5>
          <ul>
            <li id="li-lab">Cytotechnologists, CT(ASCP) </li>
            <li id="li-lab">Cytopathologists</li>
            <li id="li-lab">Pathologists’ assistants, PA(ASCP)</li>
          </ul>
          <h4 id="h4-lab">Histology</h4>
          <p id="p-lab">
            Histology involves the gross examination and microscopic analysis of
            tissue specimens. Organs and surgical tissue biopsies are first
            examined in their entirety (known as “gross” examination) by being
            weighed, measured, and dissected. The specimens are then either
            processed, affixed to slides, and stained or sliced and embedded
            into wax blocks for microscopic analysis. By studying the structure
            and function of entire tissues and organs, histologists and
            pathologists can identify cancers and other signs of pathogenesis.
          </p>
          <h5 id="h5-lab">Who works here?</h5>
          <ul>
            <li id="li-lab">Histotechnologists, HTL(ASCP)</li>
            <li id="li-lab">Histotechnicians, HT(ASCP)</li>
            <li id="li-lab">Histopathologists</li>
            <li id="li-lab">Pathologists’ assistants, PA(ASCP)</li>
          </ul>
        </div>
        <div>
          <h3 id="h3-lab">CLINICAL PATHOLOGY</h3>
          <p id="p-lab">
            Clinical pathologists oversea and collaborate with medical
            laboratory scientists and technicians to analyze various bodily
            fluids in four main clinical areas:
          </p>
          <ol>
            <li id="li-lab">Clinical chemistry Transfusion services</li>
            <li id="li-lab">Hematology and Hemostasis</li>
            <li id="li-lab">Microbiology</li>
            <li id="li-lab">Transfusion services</li>
          </ol>

          <h4 id="h4-lab">Clinical Chemistry</h4>
          <p id="p-lab">
            The chemistry department is usually the largest and most automated
            part of the laboratory. It is sometimes divided into many different
            subspecialty areas, including automated chemistry, STAT chemistry,
            immunology, toxicology, endocrinology, and special chemistry. Common
            tests include the comprehensive metabolic panel, thyroid function
            studies, lipid panel, hormone and vitamin assays, drug screens, and
            troponin – a cardiac marker that is used to indicate whether a
            patient has had a heart attack.
          </p>
          <h4 id="h4-lab">Hematology and Hemostasis</h4>
          <p id="p-lab">
            The hematology department is responsible for analyzing a patient’s
            blood and blood components. By analyzing the number and maturity of
            red blood cells, white blood cells, and platelets in a whole blood
            sample, medical scientists can detect diseases such as leukemia and
            anemia. Hematology also involves coagulation studies and platelet
            function assays (an area usually referred to as hemostasis) to help
            detect clotting problems and monitor drug therapies. Urinalysis,
            sperm counts, and malaria testing are some more examples of testing
            done in a hematology department.
          </p>
          <h4 id="h4-lab">Microbiology</h4>
          <p id="p-lab">
            From bacteria and viruses to fungi and parasites, microbiology is
            the study of all things tiny. The goal of any clinical microbiology
            lab is to detect and identify pathogenic microorganisms causing
            disease in a patient. Various specimens are first cultured onto
            media using different techniques. The goal of culturing is to
            isolate pure colonies of bacteria, mold, or fungi that can then be
            identified using methods such as mass spectrometry or PCR. Once
            identified, antibiotic susceptibility testing is usually performed
            to determine the best course of antibiotic therapy for the patient.
            Other testing in the microbiology lab includes gram staining, ova
            and parasite tests, STD testing, and rapid tests for strep and other
            common pathogens.
          </p>
          <h4 id="h4-lab">Transfusion Services</h4>
          <p id="p-lab">
            Immunohematology, also known as “Transfusion Services” or more
            commonly “Blood Bank”, is the area of the clinical laboratory
            responsible for providing compatible blood components to patients
            for transfusion. The blood bank keeps an inventory of red blood
            cells, plasma, platelets, and cryoprecipitate available for routine
            blood transfusions, surgeries, and traumas. When a patient needs
            blood, the blood bank is responsible for determining the patient’s
            blood type, testing for and identifying any antibodies present, and
            then providing crossmatch compatible blood components.
          </p>
        </div>
        <div>
          <h3 id="h3-lab">MOLECULAR PATHOLOGY</h3>
          <p id="p-lab">
            In larger laboratories, molecular and genetic testing might be done
            in a separate branch of pathology known as molecular pathology.
            Molecular pathologists usually work with medical scientists in two
            main areas, cytogenetics and molecular diagnostics.
          </p>

          <h4 id="h4-lab">Cytogenetics</h4>
          <p id="p-lab">
            Cytogenetic testing involves isolating and studying the structure of
            chromosomes. Cytogenetic technologists use different stains and
            techniques to create an image of chromosomes known as a karyotype.
            By analyzing a patient’s karyotype, cytogenetic technologists and
            molecular pathologists can identify a variety of chromosomal
            abnormalities that may lead to genetic defects such as Downs
            syndrome, Klinefelter syndrome, and Philadelphia chromosome.
          </p>
          <h5 id="h5-lab">Who works here?</h5>
          <ul>
            <li id="li-lab">Cytogenetic technologists, CG(ASCP)</li>
            <li id="li-lab">Medical laboratory scientists, MLS(ASCP)</li>
            <li id="li-lab">Molecular pathologists</li>
          </ul>
          <h4 id="h4-lab">Molecular Diagnostics</h4>
          <p id="p-lab">
            Molecular testing involves testing a sequence of DNA or RNA to
            identify a specific genetic marker of interest. This could involve
            testing the patient’s DNA to detect gene variants that cause
            inherited disease or make them more susceptible to cancers. It can
            also be used to identify the presence of infectious organisms and
            antibiotic resistant genes.
          </p>
          <h5 id="h5-lab">Who works here?</h5>
          <ul>
            <li id="li-lab">Molecular biology technologists, MB(ASCP)</li>
            <li id="li-lab">Molecular pathologists</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
