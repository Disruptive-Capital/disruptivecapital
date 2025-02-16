class dcHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
           <header class="header">
        <nav class="logo">
        <a href="/index.html"><img src="../images/logo.png" alt="Disruptive Capital Logo"></a>
        <a href="/index.html">Disruptive Capital</a>
        </nav>
        
        <!-- Hamburger Menu Icon (Visible on Mobile Only) -->
        <div class="menu-icon" id="menu-icon" onclick="toggleMenu(this)">
        <div></div>
        <div></div>
        <div></div>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="nav" id="nav-menu">
        <div class="dropdown-container">
            <a href="/reports" class="dropdown">Reports & Insights</a>
            <div class="dropdown-menu">
            <a href="/risingstars.html"> Emerging Markets</a>
            <a href="/heatmap.html"> Established Markets</a>
            <a href="/reports">Access All</a>
            </div>
        </div>
        <a href="/index.html">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/premium">Subscribe</a>
        </nav>
  </header>
    `
    }
}
customElements.define('dc-header', dcHeader)