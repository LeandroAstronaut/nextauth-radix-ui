import { Card, Container, Flex, Heading, Text, Link} from '@radix-ui/themes';
import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import NavLink from 'next/link';

function RegisterPage() {
  return (
    <>
        <Container size="1" height="100%" className="p-3 md:pd-0">
          <Flex className="h-screen items-center">
            <Card className="w-full ">
              <Heading>Sign Up</Heading>
              <SignupForm />
              <Flex justify="between" my="4">
                <Text className=''>
                  Already have an account?
                </Text>
                <Link asChild >
                  <NavLink href="/auth/login">Sign Up</NavLink>
                </Link>
              </Flex>
            </Card>
          </Flex>
        </Container>
    </>
  )
}

export default RegisterPage