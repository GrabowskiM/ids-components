// src/components/Accordion/Accordion.tsx
import React6, { useContext as useContext2, useEffect, useRef, useState } from "react";

// src/components/Expander/Expander.tsx
import React4 from "react";

// src/components/Button/Button.tsx
import React3 from "react";

// src/components/Icon/Icon.tsx
import React2, { useContext } from "react";

// src/context/Assets/Assets.tsx
import React, { createContext } from "react";
var AssetsContext = createContext({
  getIconPath: () => ""
});
var AssetsProvider = ({ children, value }) => {
  return /* @__PURE__ */ React.createElement(AssetsContext.Provider, { value }, children);
};

// src/components/Icon/Icon.tsx
import { createCssClassNames } from "@ibexa/ids-core";

// src/components/Icon/Icon.types.ts
var IconSize = /* @__PURE__ */ ((IconSize2) => {
  IconSize2["Tiny"] = "tiny";
  IconSize2["TinySmall"] = "tiny-small";
  IconSize2["Small"] = "small";
  IconSize2["SmallMedium"] = "small-medium";
  IconSize2["Medium"] = "medium";
  IconSize2["MediumLarge"] = "medium-large";
  IconSize2["Large"] = "large";
  IconSize2["LargeHuge"] = "large-huge";
  IconSize2["Huge"] = "huge";
  return IconSize2;
})(IconSize || {});

// src/components/Icon/Icon.tsx
var Icon = ({ path, className = "", name = "", size = "small" /* Small */ }) => {
  const { getIconPath } = useContext(AssetsContext);
  const iconPath = path ?? getIconPath(name);
  const componentClassName = createCssClassNames({
    "ids-icon": true,
    [`ids-icon--${size}`]: true,
    [className]: !!className
  });
  return /* @__PURE__ */ React2.createElement("svg", { "aria-label": name, className: componentClassName, role: "img" }, /* @__PURE__ */ React2.createElement("use", { xlinkHref: iconPath }));
};

// src/components/Button/Button.tsx
import { createCssClassNames as createCssClassNames2 } from "@ibexa/ids-core";

// src/components/Button/Button.types.ts
var ButtonSize = /* @__PURE__ */ ((ButtonSize2) => {
  ButtonSize2["Medium"] = "medium";
  ButtonSize2["Small"] = "small";
  return ButtonSize2;
})(ButtonSize || {});
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["Primary"] = "primary";
  ButtonType2["Secondary"] = "secondary";
  ButtonType2["Tertiary"] = "tertiary";
  ButtonType2["SecondaryAlt"] = "secondary-alt";
  ButtonType2["TertiaryAlt"] = "tertiary-alt";
  return ButtonType2;
})(ButtonType || {});

// src/components/Button/Button.tsx
var ICON_SIZE_MAPPING = {
  ["medium" /* Medium */]: "small" /* Small */,
  ["small" /* Small */]: "tiny-small" /* TinySmall */
};
var Button = ({
  onClick,
  children = null,
  ariaLabel,
  disabled = false,
  extraAria = {},
  className = "",
  icon,
  isFocusable = true,
  size = "medium" /* Medium */,
  title = "",
  type = "primary" /* Primary */
}) => {
  const iconOnly = !!icon && !children;
  const componentClassName = createCssClassNames2({
    "ids-btn": true,
    [`ids-btn--${type}`]: true,
    [`ids-btn--${size}`]: true,
    "ids-btn--disabled": disabled,
    "ids-btn--icon-only": iconOnly,
    [className]: !!className
  });
  const getBtnAriaLabel = () => {
    if (ariaLabel) {
      return ariaLabel;
    } else if (iconOnly) {
      return icon;
    }
    return typeof children === "string" ? children : "";
  };
  const renderIcon = () => {
    if (icon) {
      const iconSize = ICON_SIZE_MAPPING[size];
      return /* @__PURE__ */ React3.createElement("div", { className: "ids-btn__icon" }, /* @__PURE__ */ React3.createElement(Icon, { name: icon, size: iconSize }));
    }
    return null;
  };
  const renderLabel = () => {
    if (!iconOnly) {
      return /* @__PURE__ */ React3.createElement("div", { className: "ids-btn__label" }, children);
    }
    return null;
  };
  return /* @__PURE__ */ React3.createElement(
    "button",
    {
      "aria-disabled": disabled,
      "aria-label": getBtnAriaLabel(),
      className: componentClassName,
      disabled,
      onClick,
      role: "button",
      tabIndex: isFocusable && !disabled ? 0 : -1,
      title,
      type: "button",
      ...extraAria
    },
    renderIcon(),
    renderLabel()
  );
};

// src/components/Expander/Expander.tsx
import { createCssClassNames as createCssClassNames3 } from "@ibexa/ids-core";

// src/components/Expander/Expander.types.ts
var ExpanderType = /* @__PURE__ */ ((ExpanderType2) => {
  ExpanderType2["Caret"] = "caret";
  ExpanderType2["Chevron"] = "chevron";
  return ExpanderType2;
})(ExpanderType || {});

// src/components/Expander/Expander.tsx
var ICONS_MAP = {
  ["caret" /* Caret */]: "arrow-caret-down",
  ["chevron" /* Chevron */]: "arrow-chevron-down"
};
var Expander = ({
  onClick = () => void 0,
  type,
  collapseLabel = "",
  expandLabel = "",
  hasIcon = true,
  isExpanded = false,
  isFocusable = true
}) => {
  const label = isExpanded ? collapseLabel : expandLabel;
  const componentClassName = createCssClassNames3({
    "ids-expander": true,
    "ids-expander--has-icon": hasIcon,
    "ids-expander--has-label": label !== "",
    "ids-expander--is-expanded": isExpanded
  });
  const extraAria = {
    "aria-expanded": isExpanded
  };
  const renderExpanderIcon = () => {
    if (!hasIcon) {
      return null;
    }
    return /* @__PURE__ */ React4.createElement(Icon, { name: ICONS_MAP[type], size: "small" /* Small */ });
  };
  return /* @__PURE__ */ React4.createElement(
    Button,
    {
      ariaLabel: label,
      className: componentClassName,
      extraAria,
      isFocusable,
      onClick: () => {
        onClick(!isExpanded);
      },
      size: "small" /* Small */,
      type: "tertiary-alt" /* TertiaryAlt */
    },
    label,
    renderExpanderIcon()
  );
};

// src/context/Translator/Translator.tsx
import React5, { createContext as createContext2 } from "react";
var TranslatorContext = createContext2({
  trans: () => ""
});
var TranslatorProvider = ({ children, value }) => {
  return /* @__PURE__ */ React5.createElement(TranslatorContext.Provider, { value }, children);
};

// src/components/Accordion/Accordion.tsx
import { createCssClassNames as createCssClassNames4 } from "@ibexa/ids-core";
var FAKE_TIMEOUT_RERENDER = 1;
var Accordion = ({ children, header, initiallyExpanded = false, onHandleExpand = () => void 0 }) => {
  const Translator = useContext2(TranslatorContext);
  const accordionContentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  const [isAnimating, setIsAnimating] = useState(false);
  const collapseLabel = Translator.trans(
    /*@Desc("Hide")*/
    "ibexa.expander.label.collapse"
  );
  const expandLabel = Translator.trans(
    /*@Desc("Show")*/
    "ibexa.expander.label.expand"
  );
  const changeExpanded = (nextIsExpanded) => {
    setIsExpanded(nextIsExpanded);
    onHandleExpand(nextIsExpanded);
    setIsAnimating(true);
    if (accordionContentRef.current) {
      const initialHeight = nextIsExpanded ? 0 : accordionContentRef.current.offsetHeight;
      accordionContentRef.current.style.height = `${initialHeight}px`;
      accordionContentRef.current.addEventListener(
        "transitionend",
        () => {
          setIsAnimating(false);
          if (accordionContentRef.current) {
            accordionContentRef.current.style.removeProperty("height");
          }
        },
        { once: true }
      );
    }
    setTimeout(() => {
      if (accordionContentRef.current) {
        const finalHeight = nextIsExpanded ? accordionContentRef.current.scrollHeight : 0;
        accordionContentRef.current.style.height = `${finalHeight}px`;
      }
    }, FAKE_TIMEOUT_RERENDER);
  };
  const mainClassName = createCssClassNames4({
    "ids-accordion": true,
    "ids-accordion--is-animating": isAnimating,
    "ids-accordion--is-expanded": isExpanded
  });
  useEffect(() => {
    setIsExpanded(initiallyExpanded);
  }, [initiallyExpanded]);
  return /* @__PURE__ */ React6.createElement("div", { className: mainClassName }, /* @__PURE__ */ React6.createElement("div", { className: "ids-accordion__header" }, /* @__PURE__ */ React6.createElement("div", { className: "ids-accordion__header-content" }, header), /* @__PURE__ */ React6.createElement(
    Expander,
    {
      collapseLabel,
      expandLabel,
      hasIcon: true,
      isExpanded,
      onClick: changeExpanded,
      type: "caret" /* Caret */
    }
  )), /* @__PURE__ */ React6.createElement("div", { className: "ids-accordion__content", ref: accordionContentRef }, isExpanded || isAnimating ? children : null));
};

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
import React10, { useRef as useRef2, useState as useState3 } from "react";

// src/partials/BaseChoiceInput/BaseChoiceInput.tsx
import React8 from "react";

// src/partials/BaseInput/BaseInput.tsx
import React7 from "react";
import { createCssClassNames as createCssClassNames5 } from "@ibexa/ids-core";

// src/hooks/generators.ts
import { useId } from "react";
var useGetOrCreateId = (id) => {
  const generatedId = useId();
  return id ?? generatedId;
};

// src/partials/BaseInput/BaseInput.tsx
var BaseInput = ({
  name,
  disabled = false,
  error = false,
  className = "",
  extraInputAttrs = {},
  id,
  ref,
  required = false,
  size = "medium",
  title = "",
  type = "text",
  value = ""
}) => {
  const componentId = useGetOrCreateId(id);
  const componentClassName = createCssClassNames5({
    "ids-input": true,
    [`ids-input--${type}`]: true,
    [`ids-input--${size}`]: true,
    "ids-input--disabled": disabled,
    "ids-input--error": error,
    "ids-input--required": required,
    [className]: !!className
  });
  return /* @__PURE__ */ React7.createElement(
    "input",
    {
      "aria-invalid": error,
      "aria-required": required,
      className: componentClassName,
      disabled,
      id: componentId,
      name,
      ref,
      title,
      type,
      value,
      ...extraInputAttrs
    }
  );
};

// src/partials/BaseInput/BaseInput.types.ts
var BASE_INPUT_TYPE_VALUES = [
  "text",
  "password",
  "email",
  "number",
  "tel",
  "search",
  "url",
  "checkbox",
  "radio",
  "hidden"
];

// src/partials/BaseChoiceInput/BaseChoiceInput.tsx
import { createCssClassNames as createCssClassNames6 } from "@ibexa/ids-core";
var BaseChoiceInput = ({
  name,
  type,
  onBlur = () => void 0,
  onChange = () => void 0,
  onFocus = () => void 0,
  onInput = () => void 0,
  checked = false,
  className = "",
  disabled = false,
  error = false,
  extraAria = {},
  id,
  inputClassName = "",
  ref,
  title = "",
  value = ""
}) => {
  const componentClassName = createCssClassNames6({
    "ids-choice-input": true,
    [className]: !!className
  });
  const componentOnBlur = (event) => {
    onBlur(event);
  };
  const componentOnChange = (event) => {
    onChange(event.target.checked, event);
  };
  const componentOnFocus = (event) => {
    onFocus(event);
  };
  const componentOnInput = (event) => {
    onInput(event);
  };
  return /* @__PURE__ */ React8.createElement("div", { className: componentClassName }, /* @__PURE__ */ React8.createElement(
    BaseInput,
    {
      className: inputClassName,
      disabled,
      error,
      extraInputAttrs: {
        checked,
        onBlur: componentOnBlur,
        onChange: componentOnChange,
        onFocus: componentOnFocus,
        onInput: componentOnInput,
        ...extraAria
      },
      id,
      name,
      ref,
      title,
      type,
      value
    }
  ));
};

// src/partials/BaseChoiceInput/BaseChoiceInput.types.ts
var INPUT_CHOICE_TYPE_VALUES = ["checkbox", "radio"];

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
import { createCssClassNames as createCssClassNames7 } from "@ibexa/ids-core";

// src/hoc/withStateChecked.tsx
import React9, { useEffect as useEffect2, useState as useState2 } from "react";
var withStateChecked = (WrappedComponent) => {
  const WrapperComponent = ({ checked, onChange, ...restProps }) => {
    const [componentChecked, setComponentChecked] = useState2(checked);
    const handleChange = (...args) => {
      setComponentChecked(args[0]);
      if (onChange) {
        onChange(...args);
      }
    };
    useEffect2(() => {
      setComponentChecked(checked);
    }, [checked]);
    return /* @__PURE__ */ React9.createElement(WrappedComponent, { ...restProps, checked: componentChecked, onChange: handleChange });
  };
  WrapperComponent.displayName = `withStateChecked(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return WrapperComponent;
};

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var AltRadioInput = ({ className = "", label, tileClassName = "", title = "", ...inputProps }) => {
  const { checked = false, disabled = false, error = false, onBlur, onChange, onFocus } = inputProps;
  const inputRef = useRef2(null);
  const [isFocused, setIsFocused] = useState3(false);
  const altRadioClassName = createCssClassNames7({
    "ids-alt-radio": true,
    [className]: !!className
  });
  const altRadioTileClassName = createCssClassNames7({
    "ids-alt-radio__tile": true,
    "ids-alt-radio__tile--checked": checked,
    "ids-alt-radio__tile--disabled": disabled,
    "ids-alt-radio__tile--error": error,
    "ids-alt-radio__tile--focused": isFocused,
    [tileClassName]: !!tileClassName
  });
  const onTileClick = () => {
    inputRef.current?.focus();
    if (!checked) {
      onChange?.(true);
    }
  };
  const onInputFocus = (event) => {
    setIsFocused(true);
    onFocus?.(event);
  };
  const onInputBlur = (event) => {
    setIsFocused(false);
    onBlur?.(event);
  };
  return /* @__PURE__ */ React10.createElement("div", { className: altRadioClassName, title }, /* @__PURE__ */ React10.createElement("div", { className: "ids-alt-radio__source" }, /* @__PURE__ */ React10.createElement(
    BaseChoiceInput,
    {
      ...inputProps,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      ref: (node) => {
        inputRef.current = node;
        if (typeof inputProps.ref === "function") {
          inputProps.ref(node);
        } else if (inputProps.ref) {
          inputProps.ref.current = node;
        }
      },
      type: "radio"
    }
  )), /* @__PURE__ */ React10.createElement("div", { className: altRadioTileClassName, onClick: onTileClick, role: "button" }, label));
};
var AltRadioInputStateful = withStateChecked(AltRadioInput);

// src/components/Autosave/Autosave.tsx
import React11, { useContext as useContext3 } from "react";
import { createCssClassNames as createCssClassNames8 } from "@ibexa/ids-core";

// src/components/Autosave/Autosave.types.ts
var AutosaveStatus = /* @__PURE__ */ ((AutosaveStatus2) => {
  AutosaveStatus2["On"] = "on";
  AutosaveStatus2["Saving"] = "saving";
  AutosaveStatus2["Saved"] = "saved";
  AutosaveStatus2["Error"] = "error";
  return AutosaveStatus2;
})(AutosaveStatus || {});

// src/components/Autosave/Autosave.tsx
var Autosave = ({ isDarkMode = false, isEnabled, lastSavedTime, status = "on" /* On */ }) => {
  const Translator = useContext3(TranslatorContext);
  const classes = createCssClassNames8({
    "ids-autosave": true,
    "ids-autosave--error": status === "error" /* Error */,
    "ids-autosave--light": isDarkMode
  });
  const tooltipMessage = "content.autosave.turn_off.message";
  const getIconName = () => {
    if (!isEnabled) {
      return "autosave-off";
    }
    switch (status) {
      case "on" /* On */:
        return "autosave-on";
      case "saving" /* Saving */:
        return "autosave-saving";
      case "saved" /* Saved */:
        return "autosave-saved";
      case "error" /* Error */:
        return "autosave-error";
      default:
        return "autosave-off";
    }
  };
  const getStatusMessage = () => {
    const offMessage = Translator.trans(
      /*@Desc("Autosave is off, draft not created")*/
      "content_edit.autosave.status_off.message"
    );
    if (!isEnabled) {
      return offMessage;
    }
    switch (status) {
      case "on" /* On */:
        return Translator.trans(
          /*@Desc("Autosave is on, draft created")*/
          "content_edit.autosave.status_on.message"
        );
      case "saving" /* Saving */:
        return Translator.trans(
          /*@Desc("Saving")*/
          "content_edit.autosave.status_saving.message"
        );
      case "saved" /* Saved */:
        return Translator.trans(
          /*@Desc("Autosave is on, draft saved %time%")*/
          "content_edit.autosave.status_saved.message.full",
          {
            time: lastSavedTime?.toString() ?? ""
          }
        );
      case "error" /* Error */:
        return Translator.trans(
          /*@Desc("Saving error")*/
          "content_edit.autosave.status_error.message"
        );
      default:
        return offMessage;
    }
  };
  return /* @__PURE__ */ React11.createElement("div", { className: classes, title: isEnabled ? tooltipMessage : void 0 }, /* @__PURE__ */ React11.createElement(Icon, { className: "ids-icon", name: getIconName(), size: "small" /* Small */ }), /* @__PURE__ */ React11.createElement("div", { className: "ids-autosave__status-message" }, getStatusMessage()));
};

// src/components/Badge/Badge.tsx
import React12 from "react";
import { createCssClassNames as createCssClassNames9 } from "@ibexa/ids-core";

// src/components/Badge/Badge.types.ts
var BadgeSize = /* @__PURE__ */ ((BadgeSize2) => {
  BadgeSize2["Medium"] = "medium";
  BadgeSize2["Small"] = "small";
  return BadgeSize2;
})(BadgeSize || {});
var BadgeVariant = /* @__PURE__ */ ((BadgeVariant2) => {
  BadgeVariant2["String"] = "string";
  BadgeVariant2["Number"] = "number";
  return BadgeVariant2;
})(BadgeVariant || {});

// src/components/Badge/Badge.tsx
var MAX_BADGE_VALUE = 99;
var THRESHOLD = {
  ["medium" /* Medium */]: 100,
  ["small" /* Small */]: 10
};
var STRING_THRESHOLD = {
  ["medium" /* Medium */]: 3,
  ["small" /* Small */]: 2
};
var Badge = ({
  className = "",
  maxValue = MAX_BADGE_VALUE,
  size = "medium" /* Medium */,
  value,
  variant = "string" /* String */
}) => {
  const isStretched = variant === "number" /* Number */ ? parseInt(value, 10) >= THRESHOLD[size] : value.length >= STRING_THRESHOLD[size];
  const componentClassName = createCssClassNames9({
    "ids-badge": true,
    [`ids-badge--${size}`]: true,
    "ids-badge--stretched": isStretched,
    [className]: !!className
  });
  const formatBadgeValue = (badgeValue) => {
    if (variant === "string" /* String */) {
      return badgeValue;
    }
    const numericValue = parseInt(badgeValue, 10);
    return numericValue > maxValue ? `${maxValue}+` : numericValue.toString();
  };
  return /* @__PURE__ */ React12.createElement("div", { className: componentClassName }, formatBadgeValue(value));
};

// src/components/Checkbox/CheckboxField/CheckboxField.tsx
import React16, { useCallback } from "react";

// src/partials/BaseChoiceInputField/BaseChoiceInputField.tsx
import React14 from "react";

// src/components/ChoiceInputLabel/ChoiceInputLabel.tsx
import React13 from "react";
import { createCssClassNames as createCssClassNames10 } from "@ibexa/ids-core";
var ChoiceInputLabel = ({ children, htmlFor, className = "", title = "" }) => {
  const labelClassName = createCssClassNames10({
    "ids-choice-input-label": true,
    [className]: !!className
  });
  return /* @__PURE__ */ React13.createElement("label", { className: labelClassName, htmlFor, title }, children);
};

// src/partials/BaseChoiceInputField/BaseChoiceInputField.tsx
import { createCssClassNames as createCssClassNames11 } from "@ibexa/ids-core";
var BaseChoiceInputField = ({
  children,
  className = "",
  disabled = false,
  error = false,
  id,
  inputWrapperClassName = "",
  labelClassName = "",
  renderInput
}) => {
  const componentClassName = createCssClassNames11({
    "ids-choice-input-field": true,
    "ids-choice-input-field--disabled": disabled,
    "ids-choice-input-field--error": error,
    [className]: true
  });
  const componentInputWrapperClassName = createCssClassNames11({
    "ids-choice-input-field__input-wrapper": true,
    [inputWrapperClassName]: true
  });
  const componentLabelClassName = createCssClassNames11({
    "ids-choice-input-field__label": true,
    [labelClassName]: true
  });
  return /* @__PURE__ */ React14.createElement("div", { className: componentClassName }, /* @__PURE__ */ React14.createElement("div", { className: componentInputWrapperClassName }, renderInput()), /* @__PURE__ */ React14.createElement(ChoiceInputLabel, { className: componentLabelClassName, htmlFor: id }, children));
};

// src/components/Checkbox/CheckboxInput/CheckboxInput.tsx
import React15 from "react";
import { createCssClassNames as createCssClassNames12 } from "@ibexa/ids-core";
var CheckboxInput = ({ className = "", indeterminate = false, ...restProps }) => {
  const checkboxClassName = createCssClassNames12({
    "ids-checkbox": true,
    [className]: true
  });
  const inputClassName = createCssClassNames12({
    "ids-input--indeterminate": indeterminate
  });
  return /* @__PURE__ */ React15.createElement(
    BaseChoiceInput,
    {
      className: checkboxClassName,
      inputClassName,
      ref: (node) => {
        if (node) {
          node.indeterminate = indeterminate;
        }
      },
      type: "checkbox",
      ...restProps
    }
  );
};
var CheckboxInputStateful = withStateChecked(CheckboxInput);

// src/components/Checkbox/CheckboxField/CheckboxField.tsx
import { createCssClassNames as createCssClassNames13 } from "@ibexa/ids-core";
var CheckboxField = ({
  className = "",
  label,
  inputWrapperClassName = "",
  labelClassName = "",
  ...inputProps
}) => {
  const fieldClassName = createCssClassNames13({
    "ids-checkbox-field": true,
    [className]: !!className
  });
  const renderInput = useCallback(() => {
    return /* @__PURE__ */ React16.createElement(CheckboxInput, { ...inputProps });
  }, [inputProps]);
  return /* @__PURE__ */ React16.createElement(
    BaseChoiceInputField,
    {
      className: fieldClassName,
      id: inputProps.id,
      inputWrapperClassName,
      labelClassName,
      renderInput
    },
    label
  );
};
var CheckboxFieldStateful = withStateChecked(CheckboxField);

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
import React22, { useCallback as useCallback2 } from "react";

// src/partials/BaseInputsList/BaseInputsList.tsx
import React20 from "react";

// src/partials/BaseField/BaseField.tsx
import React19 from "react";

// src/components/HelperText/HelperText.tsx
import React17 from "react";
import { createCssClassNames as createCssClassNames14 } from "@ibexa/ids-core";

// src/components/HelperText/HelperText.types.ts
var HelperTextType = /* @__PURE__ */ ((HelperTextType2) => {
  HelperTextType2["Default"] = "default";
  HelperTextType2["Error"] = "error";
  return HelperTextType2;
})(HelperTextType || {});

// src/components/HelperText/HelperText.tsx
var ICONS_TYPE_MAP = {
  default: "info-circle",
  error: "alert-error"
};
var HelperText = ({ children, className = "", title = "", type = "default" /* Default */ }) => {
  if (!children) {
    return null;
  }
  const componentClassName = createCssClassNames14({
    "ids-helper-text": true,
    [`ids-helper-text--${type}`]: !!type,
    [className]: !!className
  });
  return /* @__PURE__ */ React17.createElement("div", { className: componentClassName, title }, /* @__PURE__ */ React17.createElement("div", { className: "ids-helper-text__icon-wrapper" }, /* @__PURE__ */ React17.createElement(Icon, { className: "ids-helper-text__icon", name: ICONS_TYPE_MAP[type], size: "tiny-small" /* TinySmall */ })), /* @__PURE__ */ React17.createElement("div", { className: "ids-helper-text__content-wrapper" }, children));
};

// src/components/Label/Label.tsx
import React18 from "react";
import { createCssClassNames as createCssClassNames15 } from "@ibexa/ids-core";
var Label = ({ children, htmlFor, error = false, className = "", required = false, title = "" }) => {
  const componentClassName = createCssClassNames15({
    "ids-label": true,
    "ids-label--error": error,
    "ids-label--required": required,
    [className]: !!className
  });
  return /* @__PURE__ */ React18.createElement("label", { className: componentClassName, htmlFor, title }, children);
};

// src/partials/BaseField/BaseField.tsx
import { createCssClassNames as createCssClassNames16 } from "@ibexa/ids-core";
var BaseField = ({ children, className = "", helperText, label, type }) => {
  const classes = createCssClassNames16({
    "ids-field": true,
    [`ids-field--${type}`]: true,
    [className]: !!className
  });
  const renderLabel = () => {
    if (!label) {
      return null;
    }
    const { children: labelContent, ...labelProps } = label;
    return /* @__PURE__ */ React19.createElement("div", { className: "ids-field__label-wrapper" }, /* @__PURE__ */ React19.createElement(Label, { ...labelProps }, labelContent));
  };
  const renderHelperText = () => {
    if (!helperText) {
      return null;
    }
    const { children: helperTextContent, ...helperTextProps } = helperText;
    return /* @__PURE__ */ React19.createElement("div", { className: "ids-field__helper-text-wrapper" }, /* @__PURE__ */ React19.createElement(HelperText, { ...helperTextProps }, helperTextContent));
  };
  return /* @__PURE__ */ React19.createElement("div", { className: classes }, renderLabel(), /* @__PURE__ */ React19.createElement("div", { className: "ids-field__source-wrapper" }, children), renderHelperText());
};

// src/partials/BaseInputsList/BaseInputsList.tsx
import { createCssClassNames as createCssClassNames17 } from "@ibexa/ids-core";

// src/partials/BaseInputsList/BaseInputsList.types.ts
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["Horizontal"] = "horizontal";
  Direction2["Vertical"] = "vertical";
  return Direction2;
})(Direction || {});

// src/partials/BaseInputsList/BaseInputsList.tsx
var BaseInputsList = ({
  items,
  renderItem,
  className = "",
  direction = "vertical" /* Vertical */,
  helperTextProps,
  labelProps
}) => {
  const listClassName = createCssClassNames17({
    "ids-choice-inputs-list": true,
    [`ids-choice-inputs-list--${direction}`]: true,
    [className]: true
  });
  return /* @__PURE__ */ React20.createElement(BaseField, { className: listClassName, helperText: helperTextProps, label: labelProps, type: "list" }, /* @__PURE__ */ React20.createElement("div", { className: "ids-choice-inputs-list__items" }, items.map((item) => renderItem(item))));
};

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
import { createCssClassNames as createCssClassNames18 } from "@ibexa/ids-core";

// src/hoc/withStateValue.tsx
import React21, { useEffect as useEffect3, useState as useState4 } from "react";
var withStateValue = (WrappedComponent) => {
  const WrapperComponent = ({ value, onChange, ...restProps }) => {
    const [componentValue, setComponentValue] = useState4(value);
    const handleChange = (...args) => {
      setComponentValue(args[0]);
      if (onChange) {
        onChange(...args);
      }
    };
    useEffect3(() => {
      setComponentValue(value);
    }, [value]);
    return /* @__PURE__ */ React21.createElement(WrappedComponent, { ...restProps, onChange: handleChange, value: componentValue });
  };
  WrapperComponent.displayName = `withStateValue(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return WrapperComponent;
};

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.types.ts
var CheckboxesListFieldAction = /* @__PURE__ */ ((CheckboxesListFieldAction2) => {
  CheckboxesListFieldAction2["Check"] = "check";
  CheckboxesListFieldAction2["Uncheck"] = "uncheck";
  return CheckboxesListFieldAction2;
})(CheckboxesListFieldAction || {});

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var CheckboxesListField = ({
  className = "",
  direction = "vertical" /* Vertical */,
  helperText,
  helperTextExtra = {},
  id,
  items,
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false,
  value = []
}) => {
  const componentClassName = createCssClassNames18({
    "ids-checkboxes-list-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: false,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const addOrRemoveItem = useCallback2(
    (itemValue, itemAdded) => {
      if (itemAdded) {
        return [...value, itemValue];
      }
      return value.filter((checkedValue) => checkedValue !== itemValue);
    },
    [value]
  );
  const renderItem = useCallback2(
    (item) => {
      return /* @__PURE__ */ React22.createElement(
        CheckboxField,
        {
          ...item,
          checked: value.includes(item.value),
          key: item.id,
          name,
          onChange: (...args) => {
            const [itemAdded] = args;
            const nextValue = addOrRemoveItem(item.value, itemAdded);
            const actionPerformed = itemAdded ? "check" /* Check */ : "uncheck" /* Uncheck */;
            onChange(nextValue, item.value, actionPerformed);
            item.onChange?.(...args);
          }
        }
      );
    },
    [addOrRemoveItem, name, onChange, value]
  );
  return /* @__PURE__ */ React22.createElement(
    BaseInputsList,
    {
      className: componentClassName,
      direction,
      helperTextProps,
      items,
      labelProps,
      renderItem
    }
  );
};
var CheckboxesListFieldStateful = withStateValue(CheckboxesListField);

// src/components/Dropdown/DropdownSingleInput/DropdownSingleInput.tsx
import React29 from "react";

// src/partials/BaseDropdown/BaseDropdown.tsx
import React28, { useContext as useContext7, useState as useState8 } from "react";

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
import React27, { useCallback as useCallback3, useEffect as useEffect7, useLayoutEffect as useLayoutEffect2, useMemo as useMemo3, useRef as useRef5, useState as useState7 } from "react";
import { autoUpdate, useFloating } from "@floating-ui/react";

// src/partials/BaseDropdown/components/Search/Search.tsx
import React26, { useContext as useContext6 } from "react";

// src/components/InputText/InputTextField/InputTextField.tsx
import React25, { useEffect as useEffect5 } from "react";

// src/components/InputText/InputTextField/InputTextField.utils.ts
import { useContext as useContext4, useEffect as useEffect4, useMemo, useRef as useRef3, useState as useState5 } from "react";
import { IsEmptyStringValidator } from "@ibexa/ids-core";

// src/shared/validators.ts
var validateInput = (value, validators) => {
  const errors = validators.reduce((errorsAcc, validator) => {
    if (!validator.validate(value)) {
      return [...errorsAcc, validator.getErrorMessage()];
    }
    return errorsAcc;
  }, []);
  return { isValid: !errors.length, messages: errors };
};

// src/components/InputText/InputTextField/InputTextField.utils.ts
var useInitValidators = ({ required }) => {
  const translator = useContext4(TranslatorContext);
  const validators = useMemo(() => {
    const validatorsList = [];
    if (required) {
      validatorsList.push(new IsEmptyStringValidator(translator));
    }
    return validatorsList;
  }, [required, translator]);
  return validators;
};
var useValidateInput = ({
  validators,
  value
}) => {
  const initialValue = useRef3(value);
  const [isDirty, setIsDirty] = useState5(false);
  useEffect4(() => {
    if (initialValue.current !== value) {
      setIsDirty(true);
    }
    initialValue.current = value;
  }, [value]);
  return useMemo(() => {
    if (!isDirty) {
      return { isValid: true, messages: [] };
    }
    return validateInput(value, validators);
  }, [initialValue.current, value, validators]);
};

// src/components/InputText/InputTextInput/InputTextInput.tsx
import React24, { useLayoutEffect, useMemo as useMemo2, useRef as useRef4, useState as useState6 } from "react";

// src/ui/ClearBtn/ClearBtn.tsx
import React23, { useContext as useContext5 } from "react";
import { createCssClassNames as createCssClassNames19 } from "@ibexa/ids-core";
var ClearBtn = ({ onClick, disabled = false }) => {
  const Translator = useContext5(TranslatorContext);
  const clearMsg = Translator.trans(
    /*@Desc("Clear")*/
    "ids.clear_btn.label"
  );
  const componentClassName = createCssClassNames19({
    "ids-clear-btn": true
  });
  return /* @__PURE__ */ React23.createElement(
    Button,
    {
      ariaLabel: clearMsg,
      className: componentClassName,
      disabled,
      icon: "discard",
      onClick,
      size: "small" /* Small */,
      title: clearMsg,
      type: "tertiary-alt" /* TertiaryAlt */
    }
  );
};

// src/components/InputText/InputTextInput/InputTextInput.tsx
import { createCssClassNames as createCssClassNames20 } from "@ibexa/ids-core";

// src/components/InputText/InputTextInput/InputTextInput.types.ts
var InputTextInputSize = /* @__PURE__ */ ((InputTextInputSize2) => {
  InputTextInputSize2["Medium"] = "medium";
  InputTextInputSize2["Small"] = "small";
  return InputTextInputSize2;
})(InputTextInputSize || {});
var INPUT_TEXT_TYPE_VALUES = ["text", "password", "email", "number", "tel", "search", "url"];

// src/components/InputText/InputTextInput/InputTextInput.tsx
var InputTextInput = ({
  name,
  onBlur = () => void 0,
  onChange = () => void 0,
  onFocus = () => void 0,
  onInput = () => void 0,
  disabled = false,
  error = false,
  extraAria = {},
  className = "",
  id,
  placeholder = "",
  processActions = (actions) => actions,
  readOnly = false,
  ref = null,
  required = false,
  size = "medium" /* Medium */,
  title = "",
  type = "text",
  value = ""
}) => {
  const actionsRef = useRef4(null);
  const [sourcePadding, setSourcePadding] = useState6(0);
  const inputTextClassName = createCssClassNames20({
    "ids-input-text": true,
    [className]: true
  });
  const componentOnBlur = (event) => {
    onBlur(event);
  };
  const componentOnChange = (event) => {
    onChange(event.target.value, event);
  };
  const componentOnFocus = (event) => {
    onFocus(event);
  };
  const componentOnInput = (event) => {
    onInput(event);
  };
  const actions = useMemo2(() => {
    const baseActions = [];
    if (value) {
      baseActions.push({
        component: /* @__PURE__ */ React24.createElement(
          ClearBtn,
          {
            disabled,
            onClick: () => {
              onChange("");
            }
          }
        ),
        id: "clear"
      });
    }
    return processActions(baseActions);
  }, [disabled, onChange, processActions, value]);
  const renderActions = () => {
    if (actions.length === 0) {
      return null;
    }
    return /* @__PURE__ */ React24.createElement("div", { className: "ids-input-text__actions", ref: actionsRef }, actions.map((action) => /* @__PURE__ */ React24.createElement("div", { className: "ids-input-text__action", key: action.id }, action.component)));
  };
  useLayoutEffect(() => {
    const actionsWidth = actionsRef.current?.offsetWidth ?? 0;
    setSourcePadding(actionsWidth);
  }, [value]);
  return /* @__PURE__ */ React24.createElement("div", { className: inputTextClassName }, /* @__PURE__ */ React24.createElement("div", { className: "ids-input-text__source" }, /* @__PURE__ */ React24.createElement(
    BaseInput,
    {
      disabled,
      error,
      extraInputAttrs: {
        onBlur: componentOnBlur,
        onChange: componentOnChange,
        onFocus: componentOnFocus,
        onInput: componentOnInput,
        placeholder,
        readOnly,
        style: { paddingRight: `${sourcePadding}px` },
        ...extraAria
      },
      id,
      name,
      ref,
      required,
      size,
      title,
      type,
      value
    }
  )), renderActions());
};
var InputTextInputStateful = withStateValue(InputTextInput);

// src/components/InputText/InputTextField/InputTextField.tsx
import { createCssClassNames as createCssClassNames21 } from "@ibexa/ids-core";
var InputTextField = ({
  className = "",
  helperText,
  helperTextExtra = {},
  id,
  input = {},
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  onValidate = () => void 0,
  required = false,
  value = ""
}) => {
  const componentClassName = createCssClassNames21({
    "ids-input-text-field": true,
    [className]: !!className
  });
  const validators = useInitValidators({ required });
  const { isValid, messages } = useValidateInput({ validators, value });
  const helperTextProps = {
    children: isValid ? helperText : messages.join(", "),
    type: isValid ? "default" /* Default */ : "error" /* Error */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: !isValid,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const inputProps = {
    ...input,
    error: !isValid,
    id,
    name,
    onChange,
    value
  };
  useEffect5(() => {
    onValidate(isValid, messages);
  }, [isValid, messages, onValidate]);
  return /* @__PURE__ */ React25.createElement(BaseField, { className: componentClassName, helperText: helperTextProps, label: labelProps, type: "input-text" }, /* @__PURE__ */ React25.createElement(InputTextInput, { ...inputProps }));
};
var InputTextFieldStateful = withStateValue(InputTextField);

// src/partials/BaseDropdown/components/Search/Search.tsx
var Search = ({ isVisible, setSearchTerm, searchRef, searchTerm }) => {
  const Translator = useContext6(TranslatorContext);
  if (!isVisible) {
    return null;
  }
  const placeholderText = Translator.trans(
    /*@Desc("Search...")*/
    "ids.dropdown.search.placeholder"
  );
  return /* @__PURE__ */ React26.createElement("div", { className: "ids-dropdown__search" }, /* @__PURE__ */ React26.createElement(
    InputTextInput,
    {
      name: "dropdown-search",
      onChange: setSearchTerm,
      placeholder: placeholderText,
      ref: searchRef,
      size: "small" /* Small */,
      value: searchTerm
    }
  ));
};

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
import { createCssClassNames as createCssClassNames22 } from "@ibexa/ids-core";

// src/hooks/useKeyEvent.ts
import { useEffect as useEffect6 } from "react";
var useKeyDown = (key, callback, node) => {
  useEffect6(() => {
    const listenerElement = node ?? window;
    const handleKeyDown = (event) => {
      if (event instanceof KeyboardEvent && key.includes(event.key)) {
        callback(event);
      }
    };
    listenerElement.addEventListener("keydown", handleKeyDown);
    return () => {
      listenerElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var ItemsContainer = ({
  closeDropdown,
  filterFunction,
  getItemAttributes,
  getNextFocusableItem: getNextFocusableItem2,
  isItemSelected,
  isOpen,
  items,
  maxVisibleItems,
  onDropdownItemClick,
  referenceElement,
  renderItem
}) => {
  const searchRef = useRef5(null);
  const itemsRef = useRef5(null);
  const originalItemsMaxHeightRef = useRef5(0);
  const [isTopPlacementForced, setIsTopPlacementForced] = useState7(false);
  const [searchTerm, setSearchTerm] = useState7("");
  const [popperElement, setPopperElement] = useState7(null);
  const [itemsContainerWidth, setItemsContainerWidth] = useState7(0);
  const [itemsMaxHeight, setItemsMaxHeight] = useState7(0);
  const { floatingStyles, placement } = useFloating({
    elements: {
      floating: popperElement,
      reference: referenceElement
    },
    placement: isTopPlacementForced ? "top-start" : "bottom-start",
    strategy: "fixed",
    whileElementsMounted: autoUpdate
  });
  const hasSearchInput = items.length > maxVisibleItems;
  const filteredItems = useMemo3(() => {
    if (!searchTerm) {
      return items;
    }
    return items.filter((item) => filterFunction(item, searchTerm));
  }, [items, searchTerm, filterFunction]);
  const onItemClick = (item) => {
    onDropdownItemClick(item, {
      closeDropdown
    });
  };
  const itemsContainerStyles = {
    ...floatingStyles,
    width: itemsContainerWidth ? `${itemsContainerWidth}px` : "auto"
  };
  const getItemsStyles = () => {
    const itemsStyles = {
      "--max-visible-items": maxVisibleItems
    };
    if (itemsMaxHeight) {
      itemsStyles.maxHeight = `${itemsMaxHeight}px`;
    }
    return itemsStyles;
  };
  const popperPlacement = placement === "top-start" ? "top" : "bottom";
  const calculateMaxAvailableItemsHeight = useCallback3(
    (availableHeight) => {
      if (!isOpen || !popperElement || !itemsRef.current) {
        return 0;
      }
      const { marginTop: itemsMarginTop, marginBottom: itemsMarginBottom } = window.getComputedStyle(popperElement);
      const { top: itemsContainerTop, bottom: itemsContainerBottom } = popperElement.getBoundingClientRect();
      const { top: itemsTop, bottom: itemsBottom } = itemsRef.current.getBoundingClientRect();
      const topHeight = parseInt(itemsMarginTop, 10) + (itemsTop - itemsContainerTop);
      const bottomHeight = parseInt(itemsMarginBottom, 10) + (itemsContainerBottom - itemsBottom);
      const calculatedAvailableHeight = availableHeight - topHeight - bottomHeight;
      return calculatedAvailableHeight;
    },
    [popperElement, isOpen]
  );
  const moveActiveFocus = (event, direction) => {
    if (isOpen) {
      event.preventDefault();
      const { activeElement } = window.document;
      if (activeElement instanceof HTMLElement && itemsRef.current instanceof HTMLUListElement) {
        const nextElement = getNextFocusableItem2(activeElement, direction, {
          itemsList: itemsRef.current,
          search: searchRef.current
        });
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  };
  useEffect7(() => {
    const clickOutsideHandler = (event) => {
      if (event.target instanceof Node && !popperElement?.contains(event.target) && !referenceElement?.contains(event.target)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      setSearchTerm("");
      searchRef.current?.focus();
      window.document.body.addEventListener("click", clickOutsideHandler);
      return () => {
        window.document.body.removeEventListener("click", clickOutsideHandler);
      };
    }
  }, [isOpen, popperElement, referenceElement]);
  useLayoutEffect2(() => {
    if (isOpen && referenceElement) {
      setItemsContainerWidth(referenceElement.offsetWidth);
      originalItemsMaxHeightRef.current = itemsRef.current?.offsetHeight ?? 0;
    } else {
      setItemsMaxHeight(0);
    }
  }, [isOpen, referenceElement]);
  useLayoutEffect2(() => {
    if (floatingStyles.transform && referenceElement) {
      const getAvailableHeight = () => {
        if (popperPlacement === "bottom") {
          const { innerHeight: windowHeight } = window;
          const { bottom: dropdownBottom } = referenceElement.getBoundingClientRect();
          return windowHeight - dropdownBottom;
        }
        return referenceElement.getBoundingClientRect().top;
      };
      const availableHeight = getAvailableHeight();
      const availableItemsHeight = calculateMaxAvailableItemsHeight(availableHeight);
      const originalDropdownFitsInViewport = availableItemsHeight > originalItemsMaxHeightRef.current;
      if (originalDropdownFitsInViewport) {
        setItemsMaxHeight(0);
      } else {
        setItemsMaxHeight(availableItemsHeight);
      }
    }
  }, [floatingStyles.transform, popperPlacement, referenceElement]);
  useLayoutEffect2(() => {
    if (isOpen && referenceElement) {
      const { top: referenceTop, bottom: referenceBottom } = referenceElement.getBoundingClientRect();
      const { innerHeight: windowHeight } = window;
      if (referenceBottom < 0 || referenceTop > windowHeight) {
        closeDropdown();
        return;
      }
      const availableSpaceAbove = referenceTop;
      const availableSpaceBelow = windowHeight - referenceBottom;
      const originalDropdownFitsInViewport = availableSpaceBelow > originalItemsMaxHeightRef.current;
      const moreSpaceAbove = availableSpaceAbove > availableSpaceBelow;
      const showDropdownAbove = moreSpaceAbove && !originalDropdownFitsInViewport;
      setIsTopPlacementForced(showDropdownAbove);
    }
  }, [isOpen, referenceElement, floatingStyles.transform]);
  useKeyDown(
    ["Enter", " "],
    (event) => {
      const { activeElement } = window.document;
      if (isOpen && activeElement?.classList.contains("ids-dropdown__item") && activeElement instanceof HTMLElement) {
        event.preventDefault();
        activeElement.click();
      }
    },
    popperElement
  );
  useKeyDown(
    ["Escape"],
    () => {
      if (isOpen) {
        closeDropdown();
        referenceElement?.focus();
      }
    },
    popperElement
  );
  useKeyDown(
    ["ArrowDown", "Tab"],
    (event) => {
      moveActiveFocus(event, "down" /* Down */);
    },
    popperElement
  );
  useKeyDown(
    ["ArrowUp"],
    (event) => {
      moveActiveFocus(event, "up" /* Up */);
    },
    popperElement
  );
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ React27.createElement("div", { className: "ids-dropdown__items-container", ref: setPopperElement, style: itemsContainerStyles }, /* @__PURE__ */ React27.createElement(Search, { isVisible: hasSearchInput, searchRef, searchTerm, setSearchTerm }), /* @__PURE__ */ React27.createElement("ul", { className: "ids-dropdown__items", ref: itemsRef, style: getItemsStyles() }, filteredItems.map((item, index) => {
    const dropdownItemClassName = createCssClassNames22({
      "ids-dropdown__item": true,
      "ids-dropdown__item--selected": isItemSelected(item)
    });
    return /* @__PURE__ */ React27.createElement(
      "li",
      {
        className: dropdownItemClassName,
        key: item.id,
        onClick: () => {
          onItemClick(item);
        },
        ref: (node) => {
          if (index === 0 && !hasSearchInput && node) {
            node.focus();
          }
        },
        role: "button",
        tabIndex: 0,
        ...getItemAttributes(item)
      },
      renderItem(item)
    );
  })));
};

// src/partials/BaseDropdown/BaseDropdown.tsx
import { createCssClassNames as createCssClassNames23 } from "@ibexa/ids-core";
var MAX_VISIBLE_ITEMS = 10;
var BaseDropdown = ({
  children,
  isEmpty = true,
  isItemSelected,
  items,
  disabled = false,
  error = false,
  filterFunction = (item, searchTerm) => item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  getItemAttributes = () => ({}),
  getNextFocusableItem: getNextFocusableItem2 = () => null,
  maxVisibleItems = MAX_VISIBLE_ITEMS,
  onDropdownItemClick,
  renderEmptySelectionInfo,
  renderItem = (item) => item.label,
  renderSelectedItems = () => null,
  renderSource = () => null,
  className = ""
}) => {
  const Translator = useContext7(TranslatorContext);
  const [referenceElement, setReferenceElement] = useState8(null);
  const [isOpen, setIsOpen] = useState8(false);
  const dropdownClassName = createCssClassNames23({
    "ids-dropdown": true,
    "ids-dropdown--disabled": disabled,
    "ids-dropdown--error": error,
    [className]: !!className
  });
  const dropdownWidgetClassName = createCssClassNames23({
    "ids-dropdown__widget ids-input": true,
    "ids-input--disabled": disabled,
    "ids-input--error": error
  });
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const renderSelectionInfo = () => {
    if (children) {
      return children;
    }
    if (isEmpty) {
      if (renderEmptySelectionInfo) {
        return renderEmptySelectionInfo();
      }
      const placeholder = Translator.trans(
        /*@Desc("Select an item")*/
        "ids.dropdown.placeholder"
      );
      return /* @__PURE__ */ React28.createElement("div", { className: "ids-dropdown__placeholder" }, placeholder);
    }
    return /* @__PURE__ */ React28.createElement("div", { className: "ids-dropdown__selection-info-items" }, renderSelectedItems());
  };
  useKeyDown(
    ["Enter", " "],
    (event) => {
      const { activeElement } = window.document;
      if (activeElement === referenceElement) {
        event.preventDefault();
        toggleDropdown();
      }
    },
    referenceElement
  );
  return /* @__PURE__ */ React28.createElement("div", { className: dropdownClassName }, /* @__PURE__ */ React28.createElement("div", { className: "ids-dropdown__source" }, renderSource()), /* @__PURE__ */ React28.createElement("div", { className: dropdownWidgetClassName, onClick: toggleDropdown, ref: setReferenceElement, role: "button", tabIndex: 0 }, /* @__PURE__ */ React28.createElement("div", { className: "ids-dropdown__selection-info" }, renderSelectionInfo()), /* @__PURE__ */ React28.createElement("div", { className: "ids-dropdown__expander" }, /* @__PURE__ */ React28.createElement(Expander, { isExpanded: isOpen, isFocusable: false, onClick: toggleDropdown, type: "chevron" /* Chevron */ }))), /* @__PURE__ */ React28.createElement(
    ItemsContainer,
    {
      closeDropdown: () => {
        setIsOpen(false);
      },
      filterFunction,
      getItemAttributes,
      getNextFocusableItem: getNextFocusableItem2,
      isItemSelected,
      isOpen,
      items,
      maxVisibleItems,
      onDropdownItemClick,
      referenceElement,
      renderItem
    }
  ));
};

// src/components/Dropdown/utils/focus.ts
var getNextFocusableItem = (getFocusableElements, element, direction, extraParams) => {
  const focusableElements = getFocusableElements(extraParams);
  const focusedItemIndex = focusableElements.findIndex((el) => el === element);
  if (direction === "down" /* Down */) {
    const nextElement = focusableElements[focusedItemIndex + 1];
    return nextElement instanceof HTMLElement ? nextElement : element;
  }
  const prevElement = focusableElements[focusedItemIndex - 1];
  return prevElement instanceof HTMLElement ? prevElement : element;
};

// src/components/Dropdown/DropdownSingleInput/DropdownSingleInput.tsx
import { createCssClassNames as createCssClassNames24 } from "@ibexa/ids-core";
var DropdownSingleInput = ({
  name,
  className = "",
  items = [],
  onChange = () => void 0,
  value = "",
  ...restProps
}) => {
  const dropdownClassName = createCssClassNames24({
    "ids-dropdown--single": true,
    [className]: !!className
  });
  const clickDropdownItem = ({ id }, { closeDropdown }) => {
    onChange(id);
    closeDropdown();
  };
  const selectedItem = value ? items.find((item) => item.id === value) : null;
  const isItemSelected = (item) => item.id === value;
  const renderItem = (item) => {
    return /* @__PURE__ */ React29.createElement(React29.Fragment, null, item.label, isItemSelected(item) && /* @__PURE__ */ React29.createElement(Icon, { name: "check-circle", size: "tiny-small" /* TinySmall */ }));
  };
  const renderSource = () => {
    return /* @__PURE__ */ React29.createElement("select", { defaultValue: value, name, tabIndex: -1 }, items.map((item) => /* @__PURE__ */ React29.createElement("option", { key: item.id, value: item.id }, item.label)));
  };
  const getFocusableElements = ({ itemsList, search }) => {
    const focusableElements = [
      ...search ? [search] : [],
      ...Array.from(itemsList.children).filter((child) => !child.classList.contains("ids-dropdown__item--selected"))
    ];
    return focusableElements.filter((element) => element instanceof HTMLElement);
  };
  return /* @__PURE__ */ React29.createElement(
    BaseDropdown,
    {
      ...restProps,
      className: dropdownClassName,
      getNextFocusableItem: getNextFocusableItem.bind(null, getFocusableElements),
      isEmpty: !selectedItem,
      isItemSelected,
      items,
      onDropdownItemClick: clickDropdownItem,
      renderItem,
      renderSelectedItems: () => selectedItem?.label ?? "",
      renderSource
    }
  );
};
var DropdownSingleInputStateful = withStateValue(DropdownSingleInput);

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
import React32 from "react";

// src/components/Chip/Chip.tsx
import React30, { useContext as useContext8 } from "react";
import { createCssClassNames as createCssClassNames25 } from "@ibexa/ids-core";
var Chip = ({ children, className = "", disabled = false, error = false, isDeletable = true, onDelete }) => {
  const Translator = useContext8(TranslatorContext);
  const deleteMsg = Translator.trans(
    /*@Desc("Delete")*/
    "ibexa.chip.delete-btn.label"
  );
  const componentClassName = createCssClassNames25({
    "ids-chip": true,
    "ids-chip--disabled": disabled,
    "ids-chip--error": error,
    [className]: !!className
  });
  const handleDeleteClick = (event) => {
    if (onDelete) {
      onDelete(event);
    }
  };
  const renderDeleteButton = () => {
    if (!isDeletable) {
      return null;
    }
    return /* @__PURE__ */ React30.createElement(
      Button,
      {
        "aria-label": deleteMsg,
        className: "ids-chip__delete",
        disabled,
        icon: "discard",
        isFocusable: true,
        onClick: handleDeleteClick,
        size: "small" /* Small */,
        type: "tertiary-alt" /* TertiaryAlt */
      }
    );
  };
  return /* @__PURE__ */ React30.createElement("div", { "aria-disabled": disabled, className: componentClassName, tabIndex: disabled ? -1 : 0 }, /* @__PURE__ */ React30.createElement("div", { className: "ids-chip__content" }, children), renderDeleteButton());
};

// src/components/OverflowList/OverflowList.tsx
import React31, { useEffect as useEffect9, useLayoutEffect as useLayoutEffect3, useMemo as useMemo4, useRef as useRef7, useState as useState9 } from "react";
import { createCssClassNames as createCssClassNames26 } from "@ibexa/ids-core";

// src/hooks/useDebounce.ts
import { useCallback as useCallback4, useEffect as useEffect8, useRef as useRef6 } from "react";
var useDebounce = (delay) => {
  const timeoutRef = useRef6(null);
  useEffect8(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });
  return useCallback4(
    (callback) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    },
    [delay]
  );
};

// src/components/OverflowList/OverflowList.tsx
var RESIZE_TIMEOUT = 200;
var OverflowList = ({
  className = "",
  items = [],
  renderItem,
  renderMore
}) => {
  const listRef = useRef7(null);
  const itemsRef = useRef7(null);
  const [itemsWidth, setItemsWidth] = useState9(0);
  const [currentAction, setCurrentAction] = useState9("none" /* None */);
  const [numberOfVisibleItems, setNumberOfVisibleItems] = useState9(items.length);
  const debounce = useDebounce(RESIZE_TIMEOUT);
  const componentClassName = createCssClassNames26({
    "ids-overflow-list": true,
    [className]: !!className
  });
  const recalculateVisibleItems = () => {
    if (!itemsRef.current) {
      return;
    }
    const itemsNodes = Array.from(itemsRef.current.children);
    const { right: listRightPosition } = itemsRef.current.getBoundingClientRect();
    const newNumberOfVisibleItems = itemsNodes.findIndex((itemNode) => {
      const { right: itemRightPosition } = itemNode.getBoundingClientRect();
      return itemRightPosition > listRightPosition;
    });
    if (newNumberOfVisibleItems === -1 || newNumberOfVisibleItems === items.length) {
      return true;
    }
    if (newNumberOfVisibleItems === numberOfVisibleItems) {
      setNumberOfVisibleItems(newNumberOfVisibleItems - 1);
    } else {
      setNumberOfVisibleItems(newNumberOfVisibleItems);
    }
    return false;
  };
  const listResizeObserver = useMemo4(
    () => new ResizeObserver(() => {
      debounce(() => {
        setItemsWidth(listRef.current?.offsetWidth ?? 0);
        setNumberOfVisibleItems(items.length);
        setCurrentAction("calculate-items" /* CalculateItems */);
      });
    }),
    [items.length, debounce]
  );
  const renderItems = () => {
    return items.slice(0, numberOfVisibleItems).map((item) => renderItem(item));
  };
  const renderOverflow = () => {
    const hiddenCount = items.length - numberOfVisibleItems;
    if (hiddenCount > 0) {
      return renderMore({ hiddenCount });
    }
  };
  useLayoutEffect3(() => {
    if (currentAction === "calculate-items" /* CalculateItems */) {
      const stopRecalculating = recalculateVisibleItems();
      if (stopRecalculating) {
        setCurrentAction("none" /* None */);
      }
    }
  }, [currentAction, numberOfVisibleItems]);
  useLayoutEffect3(() => {
    if (listRef.current) {
      setItemsWidth(listRef.current.offsetWidth);
    }
  }, []);
  useEffect9(() => {
    if (currentAction === "none" /* None */) {
      setNumberOfVisibleItems(items.length);
      setCurrentAction("calculate-items" /* CalculateItems */);
    }
  }, [items]);
  useEffect9(() => {
    if (listRef.current) {
      listResizeObserver.observe(listRef.current);
    }
    return () => {
      listResizeObserver.disconnect();
    };
  }, []);
  return /* @__PURE__ */ React31.createElement("div", { className: componentClassName, ref: listRef }, /* @__PURE__ */ React31.createElement("div", { className: "ids-overflow-list__items", ref: itemsRef, style: { width: `${itemsWidth}px` } }, renderItems(), renderOverflow()));
};

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
import { createCssClassNames as createCssClassNames27 } from "@ibexa/ids-core";

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.types.ts
var DropdownMultiInputAction = /* @__PURE__ */ ((DropdownMultiInputAction2) => {
  DropdownMultiInputAction2["Check"] = "check";
  DropdownMultiInputAction2["Uncheck"] = "uncheck";
  return DropdownMultiInputAction2;
})(DropdownMultiInputAction || {});

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var DropdownMultiInput = ({
  name,
  className = "",
  items = [],
  onChange = () => void 0,
  value = [],
  ...restProps
}) => {
  const dropdownClassName = createCssClassNames27({
    "ids-dropdown--multi": true,
    [className]: !!className
  });
  const changeValue = (id) => {
    const oldValueLength = value.length;
    const newValue = value.includes(id) ? value.filter((val) => val !== id) : [...value, id];
    const actionPerformed = newValue.length > oldValueLength ? "check" /* Check */ : "uncheck" /* Uncheck */;
    onChange(newValue, id, actionPerformed);
  };
  const clickDropdownItem = ({ id }) => {
    changeValue(id);
  };
  const getItemAttributes = () => {
    return {
      role: void 0,
      tabIndex: void 0
    };
  };
  const isItemSelected = (item) => value.includes(item.id);
  const renderItem = (item) => {
    return /* @__PURE__ */ React32.createElement(React32.Fragment, null, /* @__PURE__ */ React32.createElement(CheckboxInput, { checked: isItemSelected(item), name: `${name}-checkbox`, value: item.id }), item.label);
  };
  const selectedItems = value.length ? items.filter((item) => value.includes(item.id)) : [];
  const renderSelectedItems = () => /* @__PURE__ */ React32.createElement(
    OverflowList,
    {
      items: selectedItems,
      renderItem: (item) => /* @__PURE__ */ React32.createElement(
        Chip,
        {
          key: item.id,
          onDelete: () => {
            changeValue(item.id);
          }
        },
        item.label
      ),
      renderMore: ({ hiddenCount }) => /* @__PURE__ */ React32.createElement(Chip, { isDeletable: false }, "+", hiddenCount)
    }
  );
  const renderSource = () => {
    return /* @__PURE__ */ React32.createElement("select", { defaultValue: value, multiple: true, name, tabIndex: -1 }, items.map((item) => /* @__PURE__ */ React32.createElement("option", { key: item.id, value: item.id }, item.label)));
  };
  const getFocusableElements = ({ itemsList, search }) => {
    const focusableElements = [
      ...search instanceof HTMLElement ? [search] : [],
      ...Array.from(itemsList.children).reduce((acc, child) => {
        if (child instanceof HTMLElement) {
          const checkbox = child.querySelector(".ids-input--checkbox");
          if (checkbox instanceof HTMLElement && !checkbox.classList.contains("ids-input--disabled")) {
            acc.push(checkbox);
          }
        }
        return acc;
      }, [])
    ];
    return focusableElements;
  };
  return /* @__PURE__ */ React32.createElement(
    BaseDropdown,
    {
      ...restProps,
      className: dropdownClassName,
      getItemAttributes,
      getNextFocusableItem: getNextFocusableItem.bind(null, getFocusableElements),
      isEmpty: selectedItems.length === 0,
      isItemSelected,
      items,
      onDropdownItemClick: clickDropdownItem,
      renderItem,
      renderSelectedItems,
      renderSource
    }
  );
};
var DropdownMultiInputStateful = withStateValue(DropdownMultiInput);

// src/components/RadioButton/RadioButtonField/RadioButtonField.tsx
import React34, { useCallback as useCallback5 } from "react";

// src/components/RadioButton/RadioButtonInput/RadioButtonInput.tsx
import React33 from "react";
import { createCssClassNames as createCssClassNames28 } from "@ibexa/ids-core";
var RadioButtonInput = ({ className = "", ...restProps }) => {
  const radioButtonClassName = createCssClassNames28({
    "ids-radio-button": true,
    [className]: true
  });
  return /* @__PURE__ */ React33.createElement(BaseChoiceInput, { ...restProps, className: radioButtonClassName, type: "radio" });
};
var RadioButtonInputStateful = withStateChecked(RadioButtonInput);

// src/components/RadioButton/RadioButtonField/RadioButtonField.tsx
import { createCssClassNames as createCssClassNames29 } from "@ibexa/ids-core";
var RadioButtonField = ({
  className = "",
  inputWrapperClassName = "",
  label,
  labelClassName = "",
  ...inputProps
}) => {
  const fieldClassName = createCssClassNames29({
    "ids-radio-button-field": true,
    [className]: !!className
  });
  const renderInput = useCallback5(() => {
    return /* @__PURE__ */ React34.createElement(RadioButtonInput, { ...inputProps });
  }, [inputProps]);
  return /* @__PURE__ */ React34.createElement(
    BaseChoiceInputField,
    {
      className: fieldClassName,
      disabled: inputProps.disabled,
      error: inputProps.error,
      id: inputProps.id,
      inputWrapperClassName,
      labelClassName,
      renderInput
    },
    label
  );
};
var RadioButtonFieldStateful = withStateChecked(RadioButtonField);

// src/components/RadioButton/RadioButtonsListField/RadioButtonsListField.tsx
import React35 from "react";
import { createCssClassNames as createCssClassNames30 } from "@ibexa/ids-core";
var RadioButtonsListField = ({
  className = "",
  direction = "vertical" /* Vertical */,
  helperText,
  helperTextExtra = {},
  id,
  items,
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false,
  value = ""
}) => {
  const componentClassName = createCssClassNames30({
    "ids-radio-buttons-list-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: false,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const renderItem = (item) => {
    return /* @__PURE__ */ React35.createElement(
      RadioButtonField,
      {
        ...item,
        checked: item.value === value,
        name,
        onChange: (...args) => {
          onChange(item.value);
          item.onChange?.(...args);
        }
      }
    );
  };
  return /* @__PURE__ */ React35.createElement(
    BaseInputsList,
    {
      className: componentClassName,
      direction,
      helperTextProps,
      items,
      labelProps,
      renderItem
    }
  );
};
var RadioButtonsListFieldStateful = withStateValue(RadioButtonsListField);

// src/components/Tag/Tag.tsx
import React36 from "react";
import { createCssClassNames as createCssClassNames31 } from "@ibexa/ids-core";

// src/components/Tag/Tag.types.ts
var TagSize = /* @__PURE__ */ ((TagSize2) => {
  TagSize2["Medium"] = "medium";
  TagSize2["Small"] = "small";
  return TagSize2;
})(TagSize || {});
var TagGhostType = /* @__PURE__ */ ((TagGhostType2) => {
  TagGhostType2["SuccessGhost"] = "success-ghost";
  TagGhostType2["ErrorGhost"] = "error-ghost";
  TagGhostType2["NeutralGhost"] = "neutral-ghost";
  return TagGhostType2;
})(TagGhostType || {});
var TagType = /* @__PURE__ */ ((TagType3) => {
  TagType3["Primary"] = "primary";
  TagType3["PrimaryAlt"] = "primary-alt";
  TagType3["Success"] = "success";
  TagType3["Info"] = "info";
  TagType3["Warning"] = "warning";
  TagType3["Error"] = "error";
  TagType3["Neutral"] = "neutral";
  TagType3["IconTag"] = "icon-tag";
  return TagType3;
})(TagType || {});

// src/components/Tag/Tag.tsx
var Tag = ({ children, className = "", isDark = false, icon, size = "medium" /* Medium */, type }) => {
  const isGhostType = (tagType) => {
    return Object.values(TagGhostType).includes(tagType);
  };
  const isGhost = isGhostType(type);
  const componentClassName = createCssClassNames31({
    "ids-tag": true,
    [`ids-tag--${type}`]: true,
    [`ids-tag--${size}`]: true,
    [`ids-tag--dark`]: isDark,
    [className]: !!className
  });
  const renderDot = () => {
    if (isGhost) {
      return /* @__PURE__ */ React36.createElement("div", { className: "ids-tag__ghost-dot" });
    }
    return null;
  };
  const renderIcon = () => {
    if (icon) {
      return /* @__PURE__ */ React36.createElement("div", { className: "ids-tag__icon" }, /* @__PURE__ */ React36.createElement(Icon, { name: icon, size: "small" /* Small */ }));
    }
    return null;
  };
  return /* @__PURE__ */ React36.createElement("div", { className: componentClassName }, renderDot(), renderIcon(), /* @__PURE__ */ React36.createElement("div", { className: "ids-tag__content" }, children));
};

// src/components/ToggleButton/ToggleButtonField/ToggleButtonField.tsx
import React38 from "react";

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.tsx
import React37, { useContext as useContext9, useRef as useRef8, useState as useState10 } from "react";
import { createCssClassNames as createCssClassNames32 } from "@ibexa/ids-core";

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.types.ts
var ToggleButtonInputSize = /* @__PURE__ */ ((ToggleButtonInputSize2) => {
  ToggleButtonInputSize2["Small"] = "small";
  ToggleButtonInputSize2["Medium"] = "medium";
  return ToggleButtonInputSize2;
})(ToggleButtonInputSize || {});

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.tsx
var ToggleButtonInput = ({
  className = "",
  offLabel,
  onLabel,
  size = "medium" /* Medium */,
  title = "",
  ...inputProps
}) => {
  const {
    checked = false,
    disabled = false,
    id,
    onBlur = () => void 0,
    onChange = () => void 0,
    onFocus = () => void 0,
    onInput = () => void 0
  } = inputProps;
  const Translator = useContext9(TranslatorContext);
  const componentId = useGetOrCreateId(id);
  const inputRef = useRef8(null);
  const [isFocused, setIsFocused] = useState10(false);
  const toggleClassName = createCssClassNames32({
    "ids-toggle": true,
    [`ids-toggle--${size}`]: true,
    "ids-toggle--checked": checked,
    "ids-toggle--disabled": disabled,
    "ids-toggle--focused": isFocused,
    [className]: !!className
  });
  const onTogglerClick = () => {
    inputRef.current?.focus();
    onChange(!checked);
  };
  const onInputFocus = (event) => {
    setIsFocused(true);
    onFocus(event);
  };
  const onInputBlur = (event) => {
    setIsFocused(false);
    onBlur(event);
  };
  const getLabel = () => {
    const defaultOnLabel = Translator.trans(
      /*@Desc("On")*/
      "ids.toggle.label.on"
    );
    const defaultOffLabel = Translator.trans(
      /*@Desc("Off")*/
      "ids.toggle.label.off"
    );
    if (checked) {
      return onLabel ?? defaultOnLabel;
    }
    return offLabel ?? defaultOffLabel;
  };
  return /* @__PURE__ */ React37.createElement("div", { className: toggleClassName, title }, /* @__PURE__ */ React37.createElement("div", { className: "ids-toggle__source" }, /* @__PURE__ */ React37.createElement(
    BaseChoiceInput,
    {
      ...inputProps,
      id: componentId,
      onBlur: onInputBlur,
      onChange,
      onFocus: onInputFocus,
      onInput,
      ref: (node) => {
        inputRef.current = node;
        if (typeof inputProps.ref === "function") {
          inputProps.ref(node);
        } else if (inputProps.ref) {
          inputProps.ref.current = node;
        }
      },
      type: "checkbox"
    }
  )), /* @__PURE__ */ React37.createElement("div", { className: "ids-toggle__widget", onClick: onTogglerClick, role: "button" }, /* @__PURE__ */ React37.createElement("div", { className: "ids-toggle__indicator" })), /* @__PURE__ */ React37.createElement(ChoiceInputLabel, { className: "ids-toggle__label", htmlFor: componentId, title }, getLabel()));
};
var ToggleButtonInputStateful = withStateChecked(ToggleButtonInput);

// src/components/ToggleButton/ToggleButtonField/ToggleButtonField.tsx
import { createCssClassNames as createCssClassNames33 } from "@ibexa/ids-core";
var ToggleButtonField = ({
  checked = false,
  className = "",
  helperText,
  helperTextExtra = {},
  id,
  input = {},
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false
}) => {
  const toggleClassName = createCssClassNames33({
    "ids-toggle-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    required,
    ...labelExtra
  };
  const inputProps = {
    ...input,
    checked,
    id,
    name,
    onChange
  };
  return /* @__PURE__ */ React38.createElement(BaseField, { className: toggleClassName, helperText: helperTextProps, label: labelProps, type: "toggle" }, /* @__PURE__ */ React38.createElement(ToggleButtonInput, { ...inputProps }));
};
var ToggleButtonFieldStateful = withStateChecked(ToggleButtonField);
export {
  Accordion,
  AltRadioInput,
  AltRadioInputStateful,
  AssetsContext,
  AssetsProvider,
  Autosave,
  AutosaveStatus,
  BASE_INPUT_TYPE_VALUES,
  Badge,
  BadgeSize,
  BadgeVariant,
  BaseChoiceInput,
  BaseChoiceInputField,
  BaseDropdown,
  BaseField,
  BaseInput,
  BaseInputsList,
  Button,
  ButtonSize,
  ButtonType,
  CheckboxField,
  CheckboxFieldStateful,
  CheckboxInput,
  CheckboxInputStateful,
  CheckboxesListField,
  CheckboxesListFieldAction,
  Direction as CheckboxesListFieldDirection,
  CheckboxesListFieldStateful,
  ChoiceInputLabel,
  Direction,
  DropdownMultiInput,
  DropdownMultiInputAction,
  DropdownMultiInputStateful,
  DropdownSingleInput,
  DropdownSingleInputStateful,
  Expander,
  ExpanderType,
  HelperText,
  HelperTextType,
  INPUT_CHOICE_TYPE_VALUES,
  INPUT_TEXT_TYPE_VALUES,
  Icon,
  IconSize,
  InputTextField,
  InputTextInputSize as InputTextFieldSize,
  InputTextFieldStateful,
  InputTextInput,
  InputTextInputSize,
  InputTextInputStateful,
  Label,
  RadioButtonField,
  RadioButtonFieldStateful,
  RadioButtonInput,
  RadioButtonInputStateful,
  RadioButtonsListField,
  Direction as RadioButtonsListFieldDirection,
  RadioButtonsListFieldStateful,
  Tag,
  TagGhostType,
  TagSize,
  TagType,
  ToggleButtonField,
  ToggleButtonInputSize as ToggleButtonFieldSize,
  ToggleButtonFieldStateful,
  ToggleButtonInput,
  ToggleButtonInputSize,
  ToggleButtonInputStateful,
  TranslatorContext,
  TranslatorProvider,
  useGetOrCreateId,
  useKeyDown,
  validateInput,
  withStateChecked,
  withStateValue
};
//# sourceMappingURL=index.mjs.map