describe("Basic Tests For https://www.labirint.ru/", () => {
  beforeEach(() => {
    cy.visit("https://www.labirint.ru/");
  });

  it("Checking the content of the logo", () => {
    cy.get(".b-header-b-logo-e-logo").contains("Лабиринт");
  });

  // Checking the functionality of the navigation menu
  it("Checking the functionality of the navigation menu", () => {
    // Books
    cy.get(
      '[data-toggle="header-genres"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).trigger("mouseover");
    cy.get(
      "#header-genres > .b-toggle-container > :nth-child(1) > :nth-child(2)"
    ).should("be.visible");
    cy.get(
      '[data-toggle="header-genres"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).click();
    cy.url().should("include", "/books");
    // Foreign books
    cy.get(
      '[data-toggle="header-foreign"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).trigger("mouseover");
    cy.get(
      "#header-foreign > .b-toggle-container > :nth-child(1) > :nth-child(2)"
    ).should("be.visible");
    cy.get(
      '[data-toggle="header-foreign"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).click();
    cy.url().should("include", "/foreignbooks");
    // Main
    cy.get(
      '[data-toggle="header-best"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).click();
    cy.url().should("include", "/best");
    // School
    cy.get(
      ".hidden-for-768-and-lower > .b-header-b-menu-e-link > .b-header-b-menu-e-text"
    ).trigger("mouseover");
    cy.get(".col-sm-7 > .b-sub-menu-school-column-content").should(
      "be.visible"
    );
    cy.get(
      ".hidden-for-768-and-lower > .b-header-b-menu-e-link > .b-header-b-menu-e-text"
    ).click();
    cy.url().should("include", "/school");
    // Stationery
    cy.get(
      '[data-toggle="header-office"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).trigger("mouseover");
    cy.get(
      "#header-office > .b-toggle-container > :nth-child(1) > :nth-child(2)"
    ).should("be.visible");
    cy.get(
      '[data-toggle="header-office"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).click();
    cy.url().should("include", "/office");
    // Toys
    cy.get(
      '[data-toggle="header-toys"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).trigger("mouseover");
    cy.get(
      "#header-toys > .b-toggle-container > :nth-child(1) > :nth-child(2)"
    ).should("be.visible");
    cy.get(
      '[data-toggle="header-toys"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).click();
    cy.url().should("include", "/games");
    // Dropdown menu
    cy.get(
      ".have-dropdown > .b-header-b-menu-e-link > .b-header-b-menu-e-text"
    ).click();
    cy.get("#header-more > .b-toggle-container").should("be.visible");
    cy.get(
      "#header-more > .b-toggle-container > .b-menu-second-container > :nth-child(5) > .b-menu-list-title"
    ).click();
    cy.url().should("include", "/multimedia");
    cy.get(
      ".have-dropdown > .b-header-b-menu-e-link > .b-header-b-menu-e-text"
    ).click();
    cy.get("#header-more > .b-toggle-container").should("be.visible");
    cy.get(
      "#header-more > .b-toggle-container > .b-menu-second-container > :nth-child(6) > .b-menu-list-title"
    ).click();
    cy.url().should("include", "/souvenir");
    cy.get(
      ".have-dropdown > .b-header-b-menu-e-link > .b-header-b-menu-e-text"
    ).click();
    cy.get("#header-more > .b-toggle-container").should("be.visible");
    cy.get(
      "#header-more > .b-toggle-container > .b-menu-second-container > :nth-child(7) > .b-menu-list-title"
    ).click();
    cy.url().should("include", "/journals");
    // Club
    cy.get(
      '[data-toggle="header-club"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).trigger("mouseover");
    cy.get(".b-sub-menu-toys-content").should("be.visible");
    cy.get(
      '[data-toggle="header-club"] > .b-header-b-menu-e-link > .b-header-b-menu-e-text'
    ).click();
    cy.url().should("include", "/club");
  });

  // Checking the functionality of the navigation menu_2
  it("Checking the functionality of the navigation menu_2", () => {
    // Help
    cy.get(".first-child > .b-header-b-sec-menu-e-link").click();
    cy.url().should("include", "/help");
    // Certificates
    cy.get(
      '[data-event-content="Сертификаты"] > .b-header-b-sec-menu-e-link'
    ).click();
    cy.url().should("include", "/top/certificates/");
    // Rating
    cy.get(
      '[data-event-content="Рейтинги"] > .b-header-b-sec-menu-e-link'
    ).click();
    cy.url().should("include", "/rating/?id_genre=-1&nrd=1");
    // New
    cy.get(
      '[data-event-content="Новинки"] > .b-header-b-sec-menu-e-link'
    ).click();
    cy.url().should("include", "/novelty/");
    // Sale
    cy.get(
      '[data-event-content="Скидки"] > .b-header-b-sec-menu-e-link'
    ).click();
    cy.url().should(
      "include",
      "/search/?discount=1&available=1&order=actd&way=back&paperbooks=1&ebooks=1&otherbooks=1"
    );
    // 24/7 website support phone number
    cy.get(".have-dropdown-clickable > .b-header-b-sec-menu-e-link").click();
    cy.get(
      '.have-dropdown-clickable > .popup-window > .popup-window-content > [style="cursor: default; padding: 20px 25px; border-bottom: 1px solid #ededed"]'
    ).should("be.visible");
    cy.get(
      '.have-dropdown-clickable > .popup-window > .popup-window-content > [style="cursor: default; padding: 20px 25px; border-bottom: 1px solid #ededed"] > #_support_call_number > .btn'
    ).click();
    // Contacts
    cy.get(
      '[data-event-content="Контакты"] > .b-header-b-sec-menu-e-link'
    ).click();
    cy.url().should("include", "/contact");
    cy.get("#right-inner").should("be.visible");
    // Support
    cy.get(
      '[data-event-content="Поддержка"] > .b-header-b-sec-menu-e-link'
    ).click();
    cy.url().should("include", "/support");
    // Maps
    cy.get(".last-child > .b-header-b-sec-menu-e-link").click();
    cy.url().should("include", "/maps");
  });

  // Checking the search functionality
  it("Checking the search functionality", () => {
    cy.get("#search-field").click();
    cy.get("#search-field").type("Python");
    cy.get(".b-header-b-search-e-btntxt").click();
    cy.get(".index-top-title").contains(
      "Все, что мы нашли в Лабиринте по запросу «Python»"
    );
  });

  // Check the functionality of adding goods to the shopping cart
  it("Check the functionality of adding goods to the shopping cart", () => {
    cy.get("#search-field").click();
    cy.get("#search-field").type("Java Script");
    cy.get(".b-header-b-search-e-btntxt").click();
    cy.get(".index-top-title").contains(
      "Все, что мы нашли в Лабиринте по запросу «Java Script»"
    );
    cy.get("#buy612655").click();
    cy.get(".b-basket-popinfo-e-text-row > .color_white").click();
    cy.url().should("include", "/cart");
    cy.get("#cart-total-default > .btn").click();
    cy.url().should("include", "basket/checkout/");
  });
});
