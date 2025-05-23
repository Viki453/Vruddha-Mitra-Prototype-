import styles from "./VruddhaDetails.module.css";
import PropTypes from "prop-types";

function VruddhaDetails({ handleMapOpen, vruddhaData, selectedVruddhaId }) {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate() + 1;
  const year = dateObj.getUTCFullYear();
  const newDate = `${year}/${month}/${day}`;

  const selV = vruddhaData.find((v) => v.v_id === selectedVruddhaId);

  return (
    <>
      <div className={styles.vDet}>
        <div className={styles.basicInfo}>
          <br />
          <img src="data:image/jpeg;base64,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" />
          <h1>{selV.name}</h1>
          <h3>{selV.age} years young</h3>
        </div>
        <div className={styles.genInfo}>
          <h2>I am Vruddha</h2>
          <p>
            hCEACEJHFAFZxnFZcrBq657ATHTZZmkL1HgC5O52EGOV9uqmcbxvmeCbA76ATeFQU
          </p>
        </div>
        <div className={styles.wisdom}>
          <p>{selV.quoteforthenewgeneration}</p>
        </div>
        <div className={styles.address}>
          <h2>Address</h2>
          <p>O3NiLEHYj8omdifgnvgkbrgyf vrluidfjkv sigbvez</p>
        </div>
        <div className={styles.preferences}>
          <div>
            <h2>Likes:</h2>
            <ul>
              {selV.likes.map((like) => (
                <li key={like}>{like}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Dislikes:</h2>
            <ul>
              {selV.dislikes.map((dlike) => (
                <li key={dlike}>{dlike}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.decision}>
          <h2>Reserve for {newDate}</h2>
          <button onClick={handleMapOpen} className={styles.reserve}>
            Reserve
          </button>
          <button onClick={handleMapOpen} className={styles.back}>
            &larr;Back
          </button>
        </div>
      </div>
    </>
  );
}

VruddhaDetails.propTypes = {
  handleMapOpen: PropTypes.func.isRequired,
  vruddhaData: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedVruddhaId: PropTypes.number,
};

export default VruddhaDetails;
