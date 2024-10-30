import { Card, Container, Flex, Heading, Text, Link} from '@radix-ui/themes';
import React from 'react';
import SigninForm from '@/components/auth/SigninForm';
import NavLink from 'next/link';

function LoginPage() {
  return (
    <>
        <Container size="1" height="100%" className="p-3 md:pd-0">
          <Flex className="h-[calc(100vh-10rem)] items-center">
            <Card className="w-full">
              <Heading>Sign In</Heading>
              <SigninForm />
              <Flex justify="between" my="4">
                <Text className=''>
                  Dont have an account?
                </Text>
                <Link asChild >
                  <NavLink href="/auth/register">Sign Up</NavLink>
                </Link>
              </Flex>
            </Card>
          </Flex>
        </Container>
    </>
  )
}

export default LoginPage