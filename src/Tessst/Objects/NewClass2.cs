﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tessst
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// New class2.
    /// </summary>
    // *** Start programmer edit section *** (NewClass2 CustomAttributes)

    // *** End programmer edit section *** (NewClass2 CustomAttributes)
    [AutoAltered()]
    [Caption("New class2")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("NewClass2E", new string[] {
            "NewClass1 as \'New class1\'"})]
    [MasterViewDefineAttribute("NewClass2E", "NewClass1", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [View("NewClass2L", new string[0])]
    public class NewClass2 : ICSSoft.STORMNET.DataObject
    {

        private IIS.Tessst.NewClass1 fNewClass1;

        // *** Start programmer edit section *** (NewClass2 CustomMembers)

        // *** End programmer edit section *** (NewClass2 CustomMembers)


        /// <summary>
        /// New class2.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.NewClass1 CustomAttributes)

        // *** End programmer edit section *** (NewClass2.NewClass1 CustomAttributes)
        [PropertyStorage(new string[] {
                "NewClass1"})]
        [NotNull()]
        public virtual IIS.Tessst.NewClass1 NewClass1
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.NewClass1 Get start)

                // *** End programmer edit section *** (NewClass2.NewClass1 Get start)
                IIS.Tessst.NewClass1 result = this.fNewClass1;
                // *** Start programmer edit section *** (NewClass2.NewClass1 Get end)

                // *** End programmer edit section *** (NewClass2.NewClass1 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.NewClass1 Set start)

                // *** End programmer edit section *** (NewClass2.NewClass1 Set start)
                this.fNewClass1 = value;
                // *** Start programmer edit section *** (NewClass2.NewClass1 Set end)

                // *** End programmer edit section *** (NewClass2.NewClass1 Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "NewClass2E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass2E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass2E", typeof(IIS.Tessst.NewClass2));
                }
            }

            /// <summary>
            /// "NewClass2L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass2L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass2L", typeof(IIS.Tessst.NewClass2));
                }
            }
        }
    }
}

