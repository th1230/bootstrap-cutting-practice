import "./index.scss";
import "bootstrap/js/dist/carousel";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Collapse from "bootstrap/js/dist/collapse";
import Modal from "bootstrap/js/dist/modal";

function collapseMobileHandler() {
  const collapseMobile = document.getElementById("filter-mobile-collapse");
  const collapseBtnMobile = document.getElementById(
    "filter-mobile-collapse-btn"
  );

  const collapseBtnTextMobile = document.getElementById(
    "filter-mobile-collapse-btn-text"
  );

  const filterIconMobile = document.getElementById("collapse-mobile-icon");

  const bsCollapseMobile = new Collapse(collapseMobile, { toggle: false });

  collapseBtnMobile.addEventListener("click", () => {
    bsCollapseMobile.toggle();
  });

  collapseMobile.addEventListener("show.bs.collapse", () => {
    collapseBtnTextMobile.innerText = "收合";
    filterIconMobile.classList.add("transform-rotate-180");
  });

  collapseMobile.addEventListener("hide.bs.collapse", () => {
    collapseBtnTextMobile.innerText = "顯示更多";
    filterIconMobile.classList.remove("transform-rotate-180");
  });
}

function collapseHandler() {
  const collapse = document.getElementById("filter-collapse");
  const collapseBtn = document.getElementById("filter-collapse-btn");

  const collapseBtnText = document.getElementById("filter-collapse-btn-text");

  const filterIcon = document.getElementById("collapse-icon");

  const bsCollapse = new Collapse(collapse, { toggle: false });

  collapseBtn.addEventListener("click", () => {
    bsCollapse.toggle();
  });

  collapse.addEventListener("show.bs.collapse", () => {
    collapseBtnText.innerText = "收合";
    filterIcon.classList.add("transform-rotate-180");
  });

  collapse.addEventListener("hide.bs.collapse", () => {
    collapseBtnText.innerText = "顯示更多";
    filterIcon.classList.remove("transform-rotate-180");
  });
}

function offCanvasHandler() {
  const offCanvasMobile = document.getElementById("mobile-filter-offcanvas");
  const offCanvasMobileBtn = document.getElementById("mobile-filter-btn");

  const bsOffCanvasMobile = new Offcanvas(offCanvasMobile);

  offCanvasMobileBtn.addEventListener("click", () => {
    bsOffCanvasMobile.toggle();
  });
}

function renderItems() {
  const list = document.getElementById("list");
  for (let i = 0; i < 20; i++) {
    const item = document.createElement("div");
    item.classList.add("col");

    item.innerHTML = `<div class="mt-4">
        <div class="card">
          <img
            src="https://bruce-fe-ec.web.app/images/item.png"
            class="card-img-top"
            alt="fakeimg"
          />
          <div class="card-body p-2">
            <h5 class="card-title text-primary">$2000</h5>
            <p class="card-text fs-7">
              這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳
            </p>
            <p class="card-text text-end fs-8">已售出 1000</p>
          </div>
          <span class="badge bg-primary position-absolute top-0 end-0"
            >雙11優惠</span
          >
        </div>
      </div>`;

    list.appendChild(item);
  }
}

function searchHandler() {
  const searchBtn = document.getElementById("search-btn");
  const itemsWrapper = document.getElementById("items-wrapper");
  const spinnerWrapper = document.getElementById("spinner-wrapper");

  searchBtn.addEventListener("click", () => {
    itemsWrapper.classList.add("d-none");
    spinnerWrapper.classList.remove("d-none");

    setTimeout(() => {
      itemsWrapper.classList.remove("d-none");
      spinnerWrapper.classList.add("d-none");
    }, 1500);
  });
}

function modalHandler() {
  const cartBtn = document.getElementById("cart-btn");
  const cartModal = document.getElementById("cart");

  const bsCartModal = new Modal(cartModal, { keyboard: false });

  cartBtn.addEventListener("click", () => {
    bsCartModal.toggle();
  });
}

offCanvasHandler();
collapseMobileHandler();
collapseHandler();
renderItems();
searchHandler();
modalHandler();
