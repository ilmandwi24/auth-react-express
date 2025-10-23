import api from "../api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //  const [email, setEmail] = useState("admin@gmail.com");
  // const [password, setPassword] = useState("admin");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      toast.success("Login successful",  {
      cancel: {
        label: "Close"
      },
    });
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      // toast.warning(err.response?.data?.message || "Login failed");
      toast.warning(err.response?.data?.message || "Login failed", {
        cancel: {
          label: "Close"
        },
      });
    }
  };
  return (
    <div>
      <Card className="relative">
        <div className=" absolute top-2 right-2 ">
          <ThemeToggle />
        </div>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail@gmail.com"
                  {...register("email", { required: "Email harus diisi" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  {...register("password", {
                    required: "Password harus diisi"              
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </Field>
              <div className="flex items-center space-x-2 -mt-3">
                <Checkbox
                  id="showPassword"
                  checked={showPassword}
                  onCheckedChange={(checked) => setShowPassword(checked)}
                />
                <Label htmlFor="showPassword">Show password</Label>
              </div>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading && <Spinner />}
                  {loading ? "Loading..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
