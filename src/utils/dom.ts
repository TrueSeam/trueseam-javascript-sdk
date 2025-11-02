import { Mountable } from "../types/Mountable";
import { DelayableAnimatableElement } from "../types/DelayableAnimatableElement";
import { BaseElement } from "../types/BaseElement";
import { FrameElement } from "../types/FrameElement";

export function styleElement(
  el: HTMLElement,
  style: Partial<CSSStyleDeclaration>
) {
  Object.assign(el.style, style);
}

export function createContainer(): Mountable {
  const container = document.createElement("div");
  container.id = "cozyhome-container";
  styleElement(container, {
    position: "fixed",
    inset: "0",
    zIndex: "2147483647",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return new BaseElement({ element: container });
}

export function createBackdrop(onClick: () => void): Mountable {
  const backdrop = document.createElement("div");
  backdrop.id = "cozyhome-backdrop";
  styleElement(backdrop, {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(2px)",
    zIndex: "0",
  });
  const element = new BaseElement({ element: backdrop });
  element.addEventListener("click", onClick);
  return element;
}

export function createFrame(): Mountable {
  const frame = document.createElement("div");
  frame.id = "cozyhome-frame";
  styleElement(frame, {
    width: "800px",
    height: "0px",
    background: "black",
    zIndex: "1",
    borderRadius: "12px",
    borderTop: "3px solid black",
    borderBottom: "3px solid black",
    overflow: "hidden",
    position: "relative",
  });
  return new DelayableAnimatableElement({
    element: frame,
    animationDefinition: {
      keyFrames: [
        {
          width: "0px",
          height: "0px",
          borderTop: "3px solid black",
          borderBottom: "3px solid black",
        },
        {
          width: "800px",
          height: "0px",
          offset: 0.5,
          borderTop: "3px solid black",
          borderBottom: "3px solid black",
        },
        {
          width: "800px",
          height: "600px",
          offset: 1,
          borderTop: "0px",
          borderBottom: "0px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        },
      ],
      options: {
        fill: "forwards",
        easing: "ease-in-out",
      },
    },
  });
}

export function createFrameContent(): FrameElement {
  const content = document.createElement("iframe");
  content.id = "cozyhome-content";
  content.src = "http://localhost:3000/embed";
  styleElement(content, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    color: "white",
    border: "none",
  });
  return new FrameElement({
    element: content,
  });
}
