import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import AppButton from '../../components/form/AppButton';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import {registerUserPassword} from '../../network/Server';
import common from '../../constants/common';
import AppTextInputPassWord from '../../components/form/AppTextInputPassWord';

const passwordDetails = {
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  password: Yup.string()
    .trim()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      `
Password must have:
• Must Contain 6 Characters
• One Uppercase, One Lowercase
• One Number and one special case Character`,
    )
    .label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('Password'),
});

function SignUpPasswordScreen(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCallBack = async (values: string) => {
    console.log('values', values);
    registerUserPassword(values)
      .then(res => {
        console.log('res', res);
        props.navigation.navigate(Constants.OTPScreen, values);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Text style={styles.headingText}>Create Password</Text>
        <Formik
          initialValues={passwordDetails}
          onSubmit={values => {
            props.navigation.navigate(Constants.OTPScreen);
            console.log(values);
          }}
          validationSchema={validationSchema}>
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            isSubmitting,
            handleSubmit,
          }) => {
            return (
              <>
                <Text style={styles.label}>Create Password</Text>
                <AppTextInputPassWord
                  value={values.password}
                  placeholder="Enter Password "
                  errors={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  width={WP('80%')}
                  keyboardType="default"
                  icon={require('../../../assets/show-password-icon.png')}
                />

                <AppTextInputPassWord
                  value={values.confirmPassword}
                  placeholder="Enter Password "
                  errors={touched.confirmPassword && errors.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  width={WP('80%')}
                  keyboardType="default"
                  icon={require('../../../assets/show-password-icon.png')}
                />

                <AppButton
                  style={styles.button}
                  title="Next"
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  width={80}
                  marginTop={55}
                />
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    alignSelf: 'center',
    width: common.WP(60),
    textAlign: 'center',
    marginTop: common.WP(10),
    marginBottom: common.WP(10),
    fontSize: common.WP(5),
  },
  nameLabel: {
    color: colors.primaryBlack,
    alignSelf: 'flex-start',
    // paddingLeft: WP(10),
    marginBottom: WP(-2),
    marginTop: WP(3),
  },
  label: {
    color: colors.primaryBlack,
    alignSelf: 'flex-start',
    paddingLeft: WP(10),
    marginBottom: WP(-2),
    marginTop: WP(3),
  },
  button: {
    // marginTop: HP('5%'),
    // marginTop: common.HP('60%'),
    // bottom: common.WP(5),
  },
  input: {
    // marginTop: WP(10),
  },
  nameContainer: {
    flexDirection: 'row',
  },
  leftNameContainer: {
    marginRight: common.WP(5),
  },
  rightNameContainer: {},
});

export default SignUpPasswordScreen;