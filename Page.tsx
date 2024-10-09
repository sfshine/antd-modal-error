import * as React from "react";
import { Text, View, Button as RButton } from "react-native";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody
} from "@/components/ui/alert-dialog";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup
} from "@/components/ui/button";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";

function Example() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => {
    setShowAlertDialog(false);
  };
  return (
    <>
      <RButton title="Open Dialog" onPress={() => {
        console.log("setShowAlertDialog");
        setShowAlertDialog(true);
      }} />
      <RButton
        title="Press Me"
        onPress={() => console.log("Button pressed")}
      />
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Text>
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text>
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Example;
