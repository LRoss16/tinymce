import { UnitTest } from "@ephox/bedrock";
import { Pipeline, Step, Assertions, Chain } from "../../../../main/ts/ephox/agar/api/Main";
import StepAssertions from "../../module/ephox/agar/test/StepAssertions";
import Log from "../../../../main/ts/ephox/agar/api/Log";
import { console } from "@ephox/dom-globals";

UnitTest.asynctest('LogTest', (success, failure) => {
  const logStepTest = StepAssertions.testStepFail(
    'TestCase-01: Step failure',
    Log.step('01', 'Step failure', Assertions.sAssertEq('Assert failure', true, false))
  );

  const logStepInArrayTest = StepAssertions.testStepsFail(
    'TestCase-02: Step failure',
    [
      Log.step('02', 'Step failure', Assertions.sAssertEq('Assert failure', true, false))
    ]
  );

  const logStepsEarlyFailTest = StepAssertions.testStepsFail(
    'TestCase-03: Step failure (0)',
    Log.steps('03', 'Step failure', [
      Assertions.sAssertEq('Assert failure', true, false),
      Assertions.sAssertEq('Assert pass', true, true),
      Assertions.sAssertEq('Assert pass', true, true)
    ])
  );

  const logStepsLateFailTest = StepAssertions.testStepsFail(
    'TestCase-04: Step failure (2)',
    Log.steps('04', 'Step failure', [
      Assertions.sAssertEq('Assert pass', true, true),
      Assertions.sAssertEq('Assert pass', true, true),
      Assertions.sAssertEq('Assert failure', true, false)
    ])
  );

  const logStepsAsStepTest = StepAssertions.testStepFail(
    'TestCase-05: Step failure (2)',
    Log.stepsAsStep('05', 'Step failure', [
      Assertions.sAssertEq('Assert pass', true, true),
      Assertions.sAssertEq('Assert pass', true, true),
      Assertions.sAssertEq('Assert failure', true, false)
    ])
  );

  const logStepsAsStepInArrayTest = StepAssertions.testStepsFail(
    'TestCase-06: Step failure',
    [
      Log.stepsAsStep('06', 'Step failure', [
        Assertions.sAssertEq('Assert failure', true, false)
      ])
    ]
  );

  const logChainTest = StepAssertions.testChainFail(
    'TestCase-07: Chain failure',
    true,
    Log.chain('07', 'Chain failure', Assertions.cAssertEq('Assert failure', false))
  );

  const logChainInArrayTest = StepAssertions.testChainsFail(
    'TestCase-08: Chain failure',
    true,
    [
      Log.chain('08', 'Chain failure', Assertions.cAssertEq('Assert failure', false))
    ]
  );

  const logChainsEarlyFailTest = StepAssertions.testChainsFail(
    'TestCase-09: Step failure (0)',
    true,
    Log.chains('09', 'Step failure', [
      Assertions.cAssertEq('Assert failure', false),
      Assertions.cAssertEq('Assert pass', true),
      Assertions.cAssertEq('Assert pass', true)
    ])
  );

  const logChainsLateFailTest = StepAssertions.testChainsFail(
    'TestCase-10: Step failure (2)',
    true,
    Log.chains('10', 'Step failure', [
      Assertions.cAssertEq('Assert pass', true),
      Assertions.cAssertEq('Assert pass', true),
      Assertions.cAssertEq('Assert failure', false)
    ])
  );

  const logChainsAsChainTest = StepAssertions.testChainFail(
    'TestCase-11: Chain failure (1)',
    true,
    Log.chainsAsChain('11', 'Chain failure', [
      Assertions.cAssertEq('Assert failure', true),
      Assertions.cAssertEq('Assert failure', false)
    ])
  );

  const logChainsAsChainInArrayTest = StepAssertions.testChainsFail(
    'TestCase-12: Chain failure (1)',
    true,
    [
      Log.chainsAsChain('12', 'Chain failure', [
        Assertions.cAssertEq('Assert failure', true),
        Assertions.cAssertEq('Assert failure', false)
      ])
    ]
  );

  Pipeline.async({}, [
    logStepTest,
    logStepInArrayTest,
    logStepsEarlyFailTest,
    logStepsLateFailTest,
    logStepsAsStepTest,
    logStepsAsStepInArrayTest,

    logChainTest,
    logChainInArrayTest,
    logChainsEarlyFailTest,
    logChainsLateFailTest,
    logChainsAsChainTest,
    logChainsAsChainInArrayTest

  ], success, failure);

});