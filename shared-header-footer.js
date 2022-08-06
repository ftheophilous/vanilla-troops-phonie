
/* shared header file */
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="navbar">
              <a href="" id="logo">
                  <h2>Vanilla Troops</h2>
                  <h4>AltSchool</h4>
              </a>
              <nav>
                  <ul id="menuList">
                      <li><a href="./index.html">Home</a></li>
                      <li><a href="./About.html">About</a></li>
                      <li><a href="./Registration.html">Join us</a></li>
                  </ul>
              </nav>
              <img src="./Images/menu.png" class="menu-icon" alt="menu_img" onclick="togglemenu()" />
          </div>`;
  }
}

/* shared footer */
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
        <div class="social-links">
            <!-- <img src="fb.png" alt="fb img" /> -->
            <a href="https://www.altschoolafrica.com/">
                <img src="/Images/ig.png" alt="Ig img" role="link" />
            </a>
            <a href="https://twitter.com/AltSchoolAfrica">
                <img src="/Images/tw.png" alt="tw img" />
            </a>
            <p>&copy; 2022 Vanilla Troops.</p>
        </div>
    </footer>`;
  }
}
customElements.define(`main-header`, Header);
customElements.define(`main-footer`, Footer);