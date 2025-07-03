import python from '../icons/python.svg?raw ';
import javascript from '../icons/java-script.svg?raw ';
import ham_r from "../icons/hamburger-regular.svg?raw";
import ham_f from "../icons/hamburger-fill.svg?raw";
import arrow_up_right from "../icons/arrow-up-right.svg?raw";
import github from "../icons/github.svg?raw";
import briefcase from "../icons/briefcase.svg?raw";
import envelope from "../icons/envelope.svg?raw";
import css from "../icons/css-3.svg?raw";
import cython from "../icons/cython.svg?raw";
import discord from "../icons/discord.svg?raw";
import docker from "../icons/Docker.svg?raw";
import fastapi from "../icons/Fastapi.svg?raw";
import figma from "../icons/figma.svg?raw";
import git from "../icons/Git.svg?raw";
import html5 from "../icons/html5.svg?raw";
import htmx from "../icons/htmx.svg?raw";
import jinja from "../icons/jinja-logo.svg?raw";
import linkedin from "../icons/LinkedIn.svg?raw";
import nodejs from "../icons/Node.js.svg?raw";
import postgres from "../icons/PostgresSQL.svg?raw";
import rust from "../icons/rust.svg?raw";
import solidity from "../icons/solidity-main.svg?raw";
import sqlAlchemy from "../icons/SQLAlchemy.svg?raw";
import sqlite from "../icons/SQLite.svg?raw";
import tailwind from "../icons/tailwindcss.svg?raw";
import vite_icon from "../icons/Vite-icon.svg?raw";
import x_icon from "../icons/x.svg?raw";

const icons = {
    "python": python,
    "javascript": javascript,
    "ham_r": ham_r,
    "ham_f": ham_f,
    "arrow_up_right": arrow_up_right,
    "github": github,
    "briefcase": briefcase,
    "envelope": envelope,
    "css": css,
    "cython": cython,
    "discord": discord,
    "docker": docker,
    "fastapi": fastapi,
    "figma": figma,
    "git": git,
    "html5": html5,
    "htmx": htmx,
    "jinja": jinja,
    "linkedin": linkedin,
    "nodejs": nodejs,
    "postgres": postgres,
    "rust": rust,
    "solidity": solidity,
    "sqlAlchemy": sqlAlchemy,
    "sqlite": sqlite,
    "tailwind": tailwind,
    "vite_icon": vite_icon,
    "x": x_icon
}

class SVGIcon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = icons[this.getAttribute('source')];
    };
}

// for loop to register icons
customElements.define('svg-icon', SVGIcon);
