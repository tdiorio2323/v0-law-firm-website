import { Section } from "@/components/section"

export const metadata = {
  title: "Privacy Policy | Law Office of Thomas S. Mirigliano",
  description: "Privacy policy for the Law Office of Thomas S. Mirigliano. Learn how we collect, use, and protect your personal information."
}

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-white/70 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-lg prose-invert max-w-none space-y-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Introduction</h2>
            <p className="text-white/80 leading-relaxed">
              The Law Office of Thomas S. Mirigliano ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our legal services.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 text-white/80 ml-6">
              <li>• Fill out our contact form</li>
              <li>• Call or email our office</li>
              <li>• Schedule a consultation</li>
              <li>• Engage our legal services</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              This information may include your name, email address, phone number, address, and details about your legal matter.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-white/80 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about your browsing behavior on our site.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">How We Use Your Information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-white/80 ml-6">
              <li>• Respond to your inquiries and provide legal services</li>
              <li>• Communicate with you about your case or consultation</li>
              <li>• Send you legal updates or information you've requested</li>
              <li>• Improve our website and services</li>
              <li>• Comply with legal obligations</li>
              <li>• Protect our legal rights and prevent fraud</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Attorney-Client Privilege</h2>
            <p className="text-white/80 leading-relaxed">
              Communications with our office may be protected by attorney-client privilege once an attorney-client relationship is established. However, <strong>simply contacting us through our website or by phone does not automatically create an attorney-client relationship</strong>. Please do not send confidential information until an attorney-client relationship has been formally established.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Information Sharing and Disclosure</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="space-y-2 text-white/80 ml-6">
              <li>• <strong>With Your Consent:</strong> When you authorize us to share specific information</li>
              <li>• <strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
              <li>• <strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website or providing services (under strict confidentiality agreements)</li>
              <li>• <strong>Legal Defense:</strong> To protect our rights, property, or safety, or that of our clients or others</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Data Security</h2>
            <p className="text-white/80 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Data Retention</h2>
            <p className="text-white/80 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Client files and records are retained in accordance with professional responsibility rules and legal requirements.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Your Rights</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="space-y-2 text-white/80 ml-6">
              <li>• The right to access and receive a copy of your personal information</li>
              <li>• The right to correct inaccurate or incomplete information</li>
              <li>• The right to request deletion of your information (subject to legal obligations)</li>
              <li>• The right to object to or restrict certain processing activities</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Cookies and Tracking Technologies</h2>
            <p className="text-white/80 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Third-Party Links</h2>
            <p className="text-white/80 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Children's Privacy</h2>
            <p className="text-white/80 leading-relaxed">
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Changes to This Privacy Policy</h2>
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </div>

          <div className="rounded-xl border border-gold/20 bg-gold/10 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gold">Contact Us</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="text-white/90 space-y-2">
              <p><strong>Law Office of Thomas S. Mirigliano</strong></p>
              <p>40 Wall St, 32nd Fl, New York, NY 10005</p>
              <p>Phone: <a href="tel:+17185306548" className="text-gold hover:underline">(718) 530-6548</a></p>
              <p>Email: <a href="mailto:contact@mirigliano-law.com" className="text-gold hover:underline">contact@mirigliano-law.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
