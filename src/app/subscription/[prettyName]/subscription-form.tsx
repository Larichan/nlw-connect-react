'use client'

import { ArrowRight, Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSubscription } from "@/http/eventApi";
import { useRouter, useSearchParams } from "next/navigation";

const subscriptionSchema = z.object({
  name: z.string().min(3, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe(data: SubscriptionSchema) {
    const prettyName = searchParams.get("prettyName");
    const userId = searchParams.get("userId");
    const path = `${prettyName}${userId ? `/${userId}` : ''}`;

    const { subscriptionNumber } = await createSubscription(path, { userEmail: data.email, userName: data.name });
    push(`http://localhost:3000/subscription/${subscriptionNumber}`);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >

      <h2 className='font-heading font-semibold text-gray-200 text-xl'>Inscrição</h2>

      <div className='space-y-3'>
        <div className="space-y-2">
          <InputRoot error={!!errors.name}>
            <InputIcon>
              <User className="size-5" />
            </InputIcon>
            <InputField
              type='text'
              placeholder='Nome completo'
              {...register('name')}
            />
          </InputRoot>
          {errors.name && <p className="text-danger text-xs font-semibold">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors.email}>
            <InputIcon>
              <Mail className="size-5" />
            </InputIcon>
            <InputField
              type='email'
              placeholder='E-mail'
              {...register('email')}
            />
          </InputRoot>
          {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
        </div>
      </div>

      <Button type='submit'>
        Confirmar
        <ArrowRight />
      </Button>

    </form>
  )
}