import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, CardColumns, Badge} from 'reactstrap';
import {Container} from 'reactstrap';

class Principles extends Component {
    render() {
        return (
            <Container>
                <h1>Design Principles</h1>

                <p className="mb-3">
                    We think that a programming language should followed a principled design.
                    That is, when a design decision is made, there should be some rationale for why that
                    decision was made. By outlining some of the principles that influence Flix,
                    we hope to keep ourselves honest and also to communicate to you what kind of language Flix is.
                </p>

                <p className="mb-3">
                    Many of these ideas and principles come from languages that have inspired Flix, including Ada, Elm,
                    Haskell, OCaml, Rust, and Scala.
                </p>

                <CardColumns>

                    <Principle name="Simple is not easy">
                        We believe in Rich Hickey's creed: <a
                        href="https://www.infoq.com/presentations/Simple-Made-Easy">simple
                        is not easy</a>. We prefer a language that gets things right to one that makes things
                        easy. Such a language might take longer to learn in the short run, but its simplicity pays of
                        in the long run.
                    </Principle>

                    <Principle name="Everything is an expression">
                        Flix is a functional language and embraces the idea that everything should be an expression.
                        Flix has no local variable declarations or if-then-else statements, instead it has
                        let-bindings and if-then-else expressions.

                        However, Flix does not take this idea as far as the Scheme languages. Flix still has
                        declarations, namespaces, and so forth that are not expressions.
                    </Principle>

                    <Principle name="Local type inference">
                        The Flix type system is based on <a
                        href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">Hindley-Milner</a> which
                        supports full type inference. As a design choice, we require all functions to be annotated with
                        their argument and return types. We believe that requiring type signatures has three distinct
                        advantages the outweigh the disadvantages.
                        <ol>
                            <li>Type signatures are useful as documentation and to aid program understanding.</li>
                            <li>Type signatures more accurately assign blame.</li>
                            <li>Type signatures enable parallel type checking.</li>
                        </ol>
                        Of these, we think the former two are significantly more important than the latter.
                    </Principle>

                    <Principle name="Uniform function call syntax">
                        Flix supports <a href="https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax">uniform
                        function call syntax (UFCS)</a>. In Flix, the syntax for function application is: <code>f(a, b,
                        c)</code>. UFCS enables an "object-oriented" style where we can write the same function
                        call as <code>a.f(b, c)</code>.
                        <br/>
                        For example, the function call <code>length(xs)</code> can also be written
                        as <code>xs.length()</code>. UFCS is a purely syntatic mechanism and does not influence the
                        semantics of a call.
                    </Principle>

                    <Principle name="Keyword-based syntax">
                        The Flix syntax is inspired by Scala and Python. We believe that short key words make it
                        easy to visually identify the overall structure of a piece of code. Flix tries to use
                        three letter keywords were appropriate: <code>def</code>, <code>let</code>, <code>law</code>,
                        <code>rel</code>, but not for commonly established concepts: <code>if ... else </code>
                        and <code>match .... with</code>.
                    </Principle>

                    <Principle name="Consistent syntax">
                        Flix aims to have consistent and predictable syntax. As a concrete example, we try to have the
                        syntax of types mirror that of expressions:
                        <ul>
                            <li>
                                A function application is written as <code>f(a, b, c)</code> whereas a type application
                                is written as <code>f[a, b, c]</code>.
                            </li>
                            <li>
                                A function expression is written as <code>x -&gt; x + 1</code> whereas a function type
                                is written as <code>Int -&gt; Int</code>.
                            </li>
                            <li>
                                A tuple is written as <code>(true, 12345)</code> whereas a tuple type
                                is written as <code>(Bool, Int)</code>.
                            </li>
                        </ul>
                    </Principle>

                    <Principle name="Human-readable errors">
                        In the spirit of <a href="https://elm-lang.org/blog/compilers-as-assistants">Elm</a> and <a
                        href="https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html">Rust</a>,
                        Flix aims to have human readable compiler messages. Messages should describe the problem in
                        detail and provide information about the context, including suggestions for how to correct
                        the problem.
                    </Principle>

                    <Principle name="Private by default">
                        Flix embraces the principle of least privilege. In Flix, declarations are by default
                        hidden (i.e. private) and cannot be accessed from outside of their namespace (or
                        sub-namespaces). We believe it is important that programmers are forced to make a conscious
                        choice about whether to make a declaration publicly visible.
                    </Principle>

                    <Principle name="Illegal states should be unrepresentable">
                        We believe that a language should make it easy to make illegal states unrepresentable.
                        For example, algebraic data types can be used to precisely define the possible values of a type.
                        In Flix, in the future, we want to take this a step further, and allow refinement of some types.
                        For example, to express that some value must not only be an integer, but also that it must
                        fall within a range, e.g. <code>[0-99]</code>.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Nothing is executed before main">
                        In Flix, <code>main</code> is the entry point of a program.
                        No (user-defined) code is ever executed before <code>main</code>.
                        No static initializers, no static fields. No class loaders. Main is always first.
                        This makes it easy to reason about startup behavior.
                    </Principle>

                    <Principle name="Small, but comprehensive standard library">
                        Flix has a small standard library with a few common data types,
                        e.g. <code>Option</code>, <code>List</code>, <code>Set</code>,
                        and <code>Map</code>, but for these it offers a comprehensive collection of functionality.
                        For example, the standard library has more than 65 functions for working with lists.
                        We want the standard library to offer a common set of abstractions which are usable
                        by most programs, but not much else.
                    </Principle>

                    <Principle name="Declare before use">
                        In Flix things must be defined before they can be used.
                        Algebraic data types, functions, local variables, and other programming elements must be
                        declared before they can be used by other program parts. Declarations make it easy to assign
                        blame; we assume declarations to be correct and check every use against its declaration.
                        For example, an algebraic data type declares a set of cases, and the compiler checks that
                        every use refers to one of these cases, and that every case is covered.
                    </Principle>

                    <Principle name="No global state">
                        In Flix there is no global shared state.
                        This avoids a plethora of issues, including difficulties with initialization order and race
                        conditions in the presence of concurrency. A Flix programmer is free to construct some
                        state in the main function and pass it around, but there is no built-in mechanism to declare
                        global variables. In a real system, the programmer still has to deal with the state of
                        the world, e.g. the state of the file system, the network, and other resources.
                    </Principle>

                    <Principle name="No null value">
                        Flix does not have the <code>null</code> value. The null value is now widely considered a
                        mistake and languages such as C#, Dart, Kotlin and Scala are scrambling to adopt mechanisms to
                        ensure non-nullness.
                        In Flix, we adopt the standard solution from functional languages which is to represent
                        the absence of a value using the <code>Option</code> type. This solution is simple to
                        understand, works well, and guarantees the absence of dreaded <code>NullPointerException</code>s.
                    </Principle>

                    <Principle name="No implicit coercions">
                        In Flix, a value of one type is never implicitly coerced or converted into a value of another
                        type. For example,

                        <ul>
                            <li>No value is ever coerced to a boolean.</li>
                            <li>No value is ever coerced to a string.</li>
                            <li>Integers and floating-point are never truncated or promoted.</li>
                        </ul>
                    </Principle>

                    <Principle name="No warnings, only errors">
                        The Flix compiler never emits warnings; only compile-time errors which abort compilation.
                        Warnings can be ignored or turned off. People disagree on whether a warning is harmless or not.
                        For Flix, we believe that any code that appears troublesome or incorrect to the compiler should
                        outright be rejected.
                    </Principle>

                    <Principle name="Dead and Unreachable Code is Rejected">
                        Flix aims to enforce that programs with dead and unreachable code are rejected, similarly to how
                        Rust rejects such code.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Pattern Matches must be Exhaustive">
                        Flix enforces that a pattern match handles all cases of an algebraic data type.
                        If a match is non-exhaustive, the program is rejected.
                    </Principle>

                </CardColumns>
            </Container>
        );
    }
}

class Principle extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.children}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Principles;
