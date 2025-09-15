import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";

const TermsOfService = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating Header */}
      <FloatingHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight">
              {t('terms.title', 'Terms of')}
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-primary-glow bg-clip-text text-transparent">
                {t('terms.subtitle', 'Service')}
              </span>
            </h1>
            <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
              {t('terms.description', 'Please read these terms of service carefully before using Scolink\'s educational management platform.')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('terms.lastUpdated', 'Last updated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <h2>{t('terms.sections.agreement.title', '1. Agreement to Terms')}</h2>
            <p>
              {t('terms.sections.agreement.content1', 'These Terms of Service (\"Terms\") constitute a legally binding agreement between you (\"User\", \"you\", or \"your\") and Scolink (\"we\", \"us\", or \"our\") governing your access to and use of our educational management platform, including all related websites, mobile applications, and services (collectively, the \"Service\").')}
            </p>
            <p>
              {t('terms.sections.agreement.content2', 'By accessing, registering for, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Service.')}
            </p>
            <p>
              {t('terms.sections.agreement.content3', 'These Terms apply to all users of the Service, including educational institutions, administrators, teachers, staff members, students, and parents who may access the Service through institutional accounts.')}
            </p>

            <h2>{t('terms.sections.service.title', '2. Service Description')}</h2>
            <p>
              {t('terms.sections.service.description', 'Scolink is a comprehensive cloud-based educational management platform designed to streamline operations for educational institutions. Our Service provides:')}
            </p>
            <ul>
              <li><strong>Student Information Management:</strong> Complete student profile management, enrollment tracking, and academic records</li>
              <li><strong>Financial Management:</strong> Payment processing, fee collection, invoicing, and financial reporting</li>
              <li><strong>Academic Management:</strong> Course scheduling, attendance tracking, grade management, and curriculum planning</li>
              <li><strong>Communication Tools:</strong> Internal messaging, parent notifications, and announcement systems</li>
              <li><strong>Analytics & Reporting:</strong> Comprehensive dashboards, performance analytics, and custom reporting</li>
              <li><strong>User Management:</strong> Multi-role access control for administrators, teachers, staff, and students</li>
              <li><strong>Integration Capabilities:</strong> API access and third-party integrations</li>
              <li><strong>Data Security:</strong> Bank-level encryption and compliance with educational data protection standards</li>
              <li>Reporting and analytics</li>
            </ul>

            <h2>3. User Accounts and Responsibilities</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              To use our service, you must create an account with accurate and complete information. You are responsible
              for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3>3.2 User Responsibilities</h3>
            <p>As a user of Scolink, you agree to:</p>
            <ul>
              <li>Provide accurate and up-to-date information</li>
              <li>Use the service in compliance with applicable laws and regulations</li>
              <li>Not share your account credentials with others</li>
              <li>Not attempt to gain unauthorized access to other accounts or systems</li>
              <li>Not use the service for any illegal or unauthorized purpose</li>
              <li>Respect the privacy and rights of other users</li>
            </ul>

            <h2>4. Data Privacy and Protection</h2>
            <h3>4.1 Data Collection</h3>
            <p>
              We collect personal information that you provide directly, such as when you create an account, use our services,
              or contact us for support. This may include:
            </p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Institutional affiliation and role</li>
              <li>Usage data and preferences</li>
              <li>Payment information for billing purposes</li>
            </ul>

            <h3>4.2 Data Usage</h3>
            <p>Your data is used to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send important service updates and communications</li>
              <li>Improve our services through analytics</li>
              <li>Ensure compliance with legal obligations</li>
            </ul>

            <h3>4.3 Data Security</h3>
            <p>
              We implement industry-standard security measures including encryption, regular security audits, and access controls
              to protect your data. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Payment Terms and Billing</h2>
            <h3>5.1 Subscription Plans</h3>
            <p>
              Scolink offers four subscription tiers designed to meet the needs of educational institutions of all sizes:
            </p>
            <ul>
              <li><strong>Basic Plan:</strong> Free tier with up to 100 students, basic features</li>
              <li><strong>Professional Plan:</strong> $25/month for up to 1,500 students with advanced features</li>
              <li><strong>Premium Plan:</strong> $50/month for unlimited students with all features</li>
              <li><strong>Lifetime Plan:</strong> $500 one-time payment for perpetual access</li>
            </ul>

            <h3>5.2 Billing and Payment</h3>
            <p>
              Subscription fees are billed according to your selected plan and billing cycle. Monthly plans are billed
              monthly in advance. The Lifetime plan is a one-time payment with no recurring charges.
            </p>
            <p>
              All fees are exclusive of applicable taxes, which will be added at checkout. You are responsible for
              payment of all applicable taxes.
            </p>

            <h3>5.3 Payment Methods</h3>
            <p>
              We accept the following payment methods:
            </p>
            <ul>
              <li>Major credit cards (Visa, MasterCard, American Express, Discover)</li>
              <li>PayPal and PayPal Credit</li>
              <li>Bank transfers and wire transfers (for Lifetime plan)</li>
              <li>ACH payments (for annual billing)</li>
            </ul>

            <h3>5.4 Failed Payments and Late Fees</h3>
            <p>
              If a payment fails or is declined, we will attempt to process the payment multiple times. If payment
              cannot be collected within 7 days, your account may be suspended. A late fee of $10 may apply to
              overdue accounts. Service will be restored upon payment of outstanding amounts plus any applicable fees.
            </p>

            <h3>5.5 Refund Policy</h3>
            <p>
              <strong>Monthly/Annual Subscriptions:</strong> We offer a 30-day money-back guarantee for new subscriptions.
              If you are not satisfied with the service, you may request a full refund within 30 days of your initial payment.
              Refund requests must be submitted through our support system.
            </p>
            <p>
              <strong>Lifetime Plan:</strong> Due to the nature of lifetime access, refunds for the Lifetime plan are
              available within 30 days of purchase. After 30 days, the Lifetime plan is non-refundable but remains
              fully transferable to another institution.
            </p>
            <p>
              <strong>Partial Refunds:</strong> No partial refunds are provided for unused portions of subscription periods.
            </p>

            <h2>6. Service Availability and Support</h2>
            <h3>6.1 Service Uptime</h3>
            <p>
              We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access
              and are not liable for any downtime or service interruptions.
            </p>

            <h3>6.2 Support Services</h3>
            <p>
              Our support team is available to assist you based on your subscription plan:
            </p>
            <ul>
              <li><strong>Basic Plan:</strong> Email support during business hours (9 AM - 6 PM EST, Monday-Friday)</li>
              <li><strong>Professional Plan:</strong> Priority email support with 24-hour response time, plus live chat support</li>
              <li><strong>Premium Plan:</strong> Priority support with dedicated account manager, phone support, and 1-hour response SLA</li>
              <li><strong>Lifetime Plan:</strong> VIP support with direct access to development team, 24/7 phone support, and on-site assistance options</li>
            </ul>

            <h3>6.3 Service Level Agreements</h3>
            <p>
              We provide the following service level commitments:
            </p>
            <ul>
              <li><strong>System Availability:</strong> 99.9% uptime guarantee for core services</li>
              <li><strong>Data Backup:</strong> Daily automated backups with 30-day retention</li>
              <li><strong>Security:</strong> SOC 2 Type II compliance and regular penetration testing</li>
              <li><strong>Performance:</strong> Guaranteed response times under normal load conditions</li>
            </ul>

            <h3>6.4 Maintenance and Updates</h3>
            <p>
              We may perform scheduled maintenance that temporarily affects service availability. We will provide
              advance notice for planned maintenance when possible. Emergency maintenance may occur without prior notice
              to ensure service security and stability.
            </p>
            <p>
              We regularly update our services with new features, security improvements, and bug fixes. These updates
              are automatically applied to maintain optimal performance and security.
            </p>

            <h2>7. Intellectual Property Rights</h2>
            <h3>7.1 Our Content</h3>
            <p>
              All content, features, and functionality of Scolink, including but not limited to text, graphics, logos,
              and software, are owned by us or our licensors and are protected by copyright and other intellectual property laws.
            </p>

            <h3>7.2 User Content</h3>
            <p>
              You retain ownership of the content you upload to Scolink ("User Content"). By uploading User Content,
              you grant us a worldwide, non-exclusive, royalty-free license to use, store, process, display, and distribute
              that content solely for the purpose of providing our services to you and your institution.
            </p>
            <p>
              You represent and warrant that you have all necessary rights to upload and use the User Content, and that
              such content does not violate any third-party rights or applicable laws.
            </p>

            <h3>7.3 Trademarks and Branding</h3>
            <p>
              "Scolink" and our logos are trademarks of our company. You may not use our trademarks without prior written
              consent. Educational institutions may use our name and logo in press releases and marketing materials
              to indicate their use of our platform.
            </p>

            <h2>8. Data Protection and Privacy</h2>
            <h3>8.1 FERPA Compliance</h3>
            <p>
              For educational institutions subject to the Family Educational Rights and Privacy Act (FERPA), we provide
              tools and features to help you maintain compliance. You are responsible for ensuring your use of our
              services complies with FERPA and other applicable privacy laws.
            </p>

            <h3>8.2 GDPR Compliance</h3>
            <p>
              For users in the European Union, we comply with the General Data Protection Regulation (GDPR). We act as
              a data processor for personal data you control. Our data processing agreement outlines our respective
              responsibilities for GDPR compliance.
            </p>

            <h3>8.3 Data Retention</h3>
            <p>
              We retain user data for as long as necessary to provide our services and comply with legal obligations.
              Upon account termination, we will retain data as required by law and delete unnecessary data within
              90 days, unless you request earlier deletion.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Scolink shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of our services. Our total liability shall
              not exceed the amount paid by you for the services in the 12 months preceding the claim.
            </p>

            <h3>9.1 Direct and Indirect Damages</h3>
            <p>
              In no event shall Scolink be liable for any indirect, incidental, special, punitive, or consequential damages,
              including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your use of or inability to use the Service</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Any third-party claims</li>
              <li>Any other matter relating to the Service</li>
            </ul>

            <h3>9.2 Liability Cap</h3>
            <p>
              Our total liability to you for all claims arising from or relating to these Terms or the Service shall not
              exceed the greater of: (a) the amount you paid us in the 12 months preceding the claim, or (b) $100 USD.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Scolink, its officers, directors, employees, and agents
              from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable
              attorneys' fees) arising from:
            </p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your use of the Service</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you upload or transmit through the Service</li>
            </ul>

            <h2>11. Account Termination</h2>
            <h3>11.1 Termination by User</h3>
            <p>
              You may terminate your account at any time by contacting our support team or using the account settings.
              Upon termination, your access to the Service will cease immediately. We will retain your data as required
              by law and for legitimate business purposes.
            </p>

            <h3>11.2 Termination by Scolink</h3>
            <p>
              We may terminate or suspend your account immediately, without prior notice, for any violation of these Terms
              or for conduct that we determine to be harmful to our service, users, or third parties. We will make reasonable
              efforts to provide notice of termination when circumstances permit.
            </p>

            <h3>11.3 Effect of Termination</h3>
            <p>
              Upon termination:
            </p>
            <ul>
              <li>Your right to use the Service immediately ceases</li>
              <li>We may delete your account and data within 90 days</li>
              <li>Outstanding payments remain due</li>
              <li>Sections of these Terms that by their nature should survive termination will remain in effect</li>
            </ul>

            <h2>12. Governing Law and Dispute Resolution</h2>
            <h3>12.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
              United States, without regard to its conflict of law principles.
            </p>

            <h3>12.2 Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with
              the Commercial Arbitration Rules of the American Arbitration Association. The arbitration shall take place
              in Delaware, and the prevailing party shall be entitled to recover reasonable attorneys' fees.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent
              jurisdiction, such provision shall be severed from these Terms, and the remaining provisions shall remain
              in full force and effect.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms of Service, together with our Privacy Policy and any other legal notices published by us on
              the Service, constitute the entire agreement between you and Scolink concerning the Service.
            </p>

            <h2>16. Waiver</h2>
            <p>
              No waiver of any provision of these Terms shall be effective unless in writing and signed by both parties.
              Our failure to enforce any provision of these Terms shall not constitute a waiver of our right to enforce
              such provision in the future.
            </p>

            <h2>17. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> legal@scolink.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Education Street, Learning City, LC 12345, USA</li>
              <li><strong>Support:</strong> For technical support, visit our Help Center at support.scolink.com</li>
            </ul>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <p className="text-center text-sm text-muted-foreground">
                By using Scolink, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
