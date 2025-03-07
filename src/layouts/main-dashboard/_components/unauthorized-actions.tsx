import Button from "@/components/ui/button";

const UnauthorizedActions = ({
  handleSignin,
  mobile = false,
}: {
  handleSignin: () => void;
  mobile?: boolean;
}) => {
  return (
    <>
      <Button
        variant="outline"
        visibleFrom={!mobile ? "lg" : undefined}
        hiddenFrom={mobile ? "lg" : undefined}
        fullWidth={mobile}
        onClick={handleSignin}
      >
        Log in
      </Button>
      <Button
        visibleFrom={!mobile ? "lg" : undefined}
        hiddenFrom={mobile ? "lg" : undefined}
        fullWidth={mobile}
        onClick={handleSignin}
      >
        Sign Up
      </Button>
    </>
  );
};

export default UnauthorizedActions;
