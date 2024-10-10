import { ModalWithBackdropShowcase } from "@/src/kitten/Dialog";
import MyComponent from "@/src/paper/Dialog";
import Dialogs from "@/src/rne/Dialog";
import SwitchPaper from "@/src/paper/Switch";
import { TabViewSimpleUsageShowcase } from "@/src/kitten/TabViewSimpleUsageShowcase";
import { RneTab } from "@/src/rne/Tab";
import { ToggleStatusShowcase } from "@/src/kitten/Switch";
import SwitchComponent from "@/src/rne/Switch";
import { ProgressBarSimpleUsageShowcase } from "@/src/kitten/ProgressBar";
import MyComponentProgressBar from "@/src/paper/ProgressBar";
import LinearProgressAPI from "@/src/rne/ProgressBar";
import { CircularProgressBarStatesShowcase } from "@/src/kitten/ProgressCircle";
import OverlayComponent from "@/src/rne/Modal";
import MyComponentModal from "@/src/paper/Modal";
import { BottomSheet, Icon } from "@rneui/themed";
import { RangeCalendarSimpleUsageShowcase } from "@/src/rne/Calender";
import { PopoverSimpleUsageShowcase } from "@/src/kitten/Popover";
import { RNETooltip } from "@/src/rne/Popover";
import MyComponentTooltip from "@/src/paper/Popover";
import { OverflowMenuNoMarkersShowcase } from "@/src/kitten/DropDownMenu";
import { InputStatusShowcase } from "@/src/kitten/Input";
import MyComponentInput from "@/src/paper/Input";
import { RneInput } from "@/src/rne/Input";
import { IconAnimationShowcase, IconWithinComponentsShowcase } from "@/src/kitten/Icon";

// 创建数据结构，值为具体的组件
export const componentData = {
  Dialog: {
    "UI Kitten": ModalWithBackdropShowcase,
    "React Native Paper": MyComponent,
    "React Native Elements": Dialogs
  },
  Tab: {
    "UI Kitten": TabViewSimpleUsageShowcase,
    "React Native Elements": RneTab
  },
  Switch: {
    "UI Kitten": ToggleStatusShowcase,
    "React Native Paper": SwitchPaper,
    "React Native Elements": SwitchComponent
  },
  ProgressBar: {
    "UI Kitten": ProgressBarSimpleUsageShowcase,
    "React Native Paper": MyComponentProgressBar,
    "React Native Elements": LinearProgressAPI
  },
  ProgressBarCircle: {
    "UI Kitten": CircularProgressBarStatesShowcase
  },
  Modal: {
    "UI Kitten": ModalWithBackdropShowcase,
    "React Native Paper": MyComponentModal,
    "React Native Elements": OverlayComponent
  },
  ActionSheet: {
    "React Native Elements": BottomSheet
  },
  Calender: {
    "UI Kitten": RangeCalendarSimpleUsageShowcase
  },
  Popover: {
    "UI Kitten": PopoverSimpleUsageShowcase,
    "Paper": MyComponentTooltip,
    "RNE": RNETooltip
  },
  DropDownMenu: {
    "UI Kitten": OverflowMenuNoMarkersShowcase,
    "Paper": MyComponentTooltip,
    "RNE": RNETooltip
  },
  Input: {
    "UI Kitten": InputStatusShowcase,
    "Paper": MyComponentInput,
    "RNE": RneInput
  },
  Icon: {
    "UI Kitten": IconAnimationShowcase,
    "Paper": MyComponentInput,
    "RNE": RneInput
  }
};
