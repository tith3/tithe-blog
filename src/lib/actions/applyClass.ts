export function applyClass(node: HTMLElement, className: string) {
    const elements = node.querySelectorAll('*');
    elements.forEach(element => {
        element.classList.add(className);
    });
}
