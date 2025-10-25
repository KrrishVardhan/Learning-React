function customRender(element, container) {
    domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop])   
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Visit Google'
}
const root = document.getElementById("root")
customRender(reactElement, root)