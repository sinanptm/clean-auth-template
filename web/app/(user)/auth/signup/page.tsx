import { memo } from "react";
import SignupForm from "@/components/forms/SignupForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIgnup",
};
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm showSignIn={true} signInLink="/auth" />
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(Signup);
