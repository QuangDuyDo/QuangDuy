import { menu_arr, testimonials_arr, service_arr } from './data.js';
const showmenu = (menu) => {
    return `<li class="nav-item">
                            <a class="nav-link" href="${menu.link}">${menu.string}</a>
                        </li>`;
};
const showTestimonials = (Ttestimonials) => {
    return `<div class="col-lg-6">
                    <blockquote class="blockquote">
                        <p>"${Ttestimonials.customerComment}"</p>
                        <footer class="blockquote-footer">${Ttestimonials.customerName}</footer>
                    </blockquote>
                </div>`;
};
const showService = (Tservice) => {
    return `<div class="col-lg-4">
                        <i class="bi bi-heart-pulse display-4 mb-3"></i>
                        <h3>${Tservice.serviceName}</h3>
                        <p>${Tservice.serviceDescription}</p>
                    </div>`;
};
export const showListMenu = () => {
    const html_arr = menu_arr.map(showmenu);
    return html_arr.join("");
};
export const showListTestimonials = () => {
    const html_arr = testimonials_arr.map(showTestimonials);
    return html_arr.join("");
};
export const showListServie = () => {
    const html_arr = service_arr.map(showService);
    return html_arr.join("");
};
