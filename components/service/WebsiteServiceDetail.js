// import Image from "next/image";
import styles from "./WebsiteServiceDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import CheckoutBtn from "../../share-components/CheckoutBtn";

function WebsiteServiceDetail() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>Website Service</h1>
      <div className={styles.detailcard}>
        <div className={styles.tablecontainer}>
          <table className={styles.styledtable}>
            <thead>
              <tr>
                <th>Package</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>First Class</th>
                <th>E-Commerce</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Pages</td>
                <td>10 pages</td>
                <td>45 pages</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Responsive</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>CMS Integration</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>Admin Panel</td>
                <td>Admin Panel</td>
                <td>Admin Panel</td>
              </tr>
              <tr>
                <td>SSL Integration</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>SEO</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Social Network Integration</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Design</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Content Analysis</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Testing on Devices</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Domain</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>Full Ownership (DCP)</td>
                <td>Full Ownership (DCP)</td>
              </tr>
              <tr>
                <td>Update (every year)</td>
                <td>5 times</td>
                <td>12 times</td>
                <td>15 times</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Business Mail</td>
                <td>5</td>
                <td>10</td>
                <td>15</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>10GB</td>
                <td>20GB</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Data Transfer</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Hosting</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Google Map</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Contact Form</td>
                <td>Basic</td>
                <td>Standard</td>
                <td>Standard</td>
                <td>Standard</td>
              </tr>
              <tr>
                <td>Photo Gallery</td>
                <td>-</td>
                <td>Standard</td>
                <td>Standard</td>
                <td>Standard</td>
              </tr>
              <tr>
                <td>News, Events</td>
                <td>Basic</td>
                <td>Standard</td>
                <td>Standard</td>
                <td>Standard</td>
              </tr>
              <tr>
                <td>Visitor Counts</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Traffic</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Top Search Query Report</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Top Country/Region</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Technologies Update</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Website Backup</td>
                <td>-</td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.packagecontainer}>
          <img
            src="/images/services/website/basic-website-package.jpg"
            alt="Basic Website Package"
            width={200}
            height={150}
            className={styles.packageimage}
          />


          <div className={styles.packagetextcontainer}>
            <h3>Basic Website Packages</h3>
            <p>Ideal for beginners and small business owners. You can add additional features that are not included in the Basic Package as add-ons.</p>
          </div>
        </div>

        <div className={styles.packagecontainer}>
          <img
            src="/images/services/website/standard-website-package.jpg"
            alt="Basic Website Package"
            width={200}
            height={150}
            className={styles.packageimage}
          />

          <div className={styles.packagetextcontainer}>
            <h3>Standard Website Packages</h3>
            <p>Suitable for well-known businesses and medium-sized businesses. You can add additional features that are not included in the Basic Package as add-ons.</p>
          </div>
        </div>

        <div className={styles.packagecontainer}>
          <img
            src="/images/services/website/first-class-website-package.jpg"
            alt="Basic Website Package"
            width={200}
            height={150}
            className={styles.packageimage}
          />

          <div className={styles.packagetextcontainer}>
            <h3>First Class Website Packages</h3>
            <p>Suitable for well-known businesses and large-sized businesses. There will be two separate design samples.</p>
          </div>
        </div>

        <div className={styles.packagecontainer}>
          <img
            src="/images/services/website/e-commerce.jpg"
            alt="Basic Website Package"
            width={200}
            height={150}
            className={styles.packageimage}
          />

          <div className={styles.packagetextcontainer}>
            <h3>E-Commerce Website</h3>
            <p>As internet usage expands in Myanmar, the practice of online shopping is becoming a rapidly growing market. Easy to use and professionally managed is the key to an e-commerce website. Layout that suits the nature of your business, Administration, Customization Messenger bot and Payment forms are now available at RCS.</p>
          </div>
        </div>

        <CheckoutBtn path="website service" />
      </div>
    </div>
  );
}

export default WebsiteServiceDetail;
