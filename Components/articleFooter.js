class ArticleFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
         <footer>
    <p>
      Discover more disruptive insights with <strong>Disruptive Capital</strong>.
    </p>
  </footer>
        `
    }
}

customElements.define('dc-article-footer', ArticleFooter)