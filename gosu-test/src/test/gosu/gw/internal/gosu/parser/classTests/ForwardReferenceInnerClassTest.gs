package gw.internal.gosu.parser.classTests

uses gw.BaseVerifyErrantTest

class ForwardReferenceInnerClassTest extends BaseVerifyErrantTest {

  function testForwardReferenceInnerClass() {
    assertTrue( ForwardReferenceInnerClass.Type.Valid )
    assertEquals( "blah", new ForwardReferenceInnerClass.Foo.Inner1().blah() )
  }
}